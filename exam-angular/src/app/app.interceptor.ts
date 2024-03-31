import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse} from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable, throwError} from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { getAuth } from 'firebase/auth'
import { catchError } from 'rxjs/operators';
import { environment } from "src/environments/environment.development";

@Injectable()
class AppInterceptor implements HttpInterceptor{

  constructor(private cookieService: CookieService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.cookieService.get('firebaseAuthToken');
    console.log('initial token: ', token);

    function refreshToken(): Promise<string> {
      // api call returns Promise<string>
      const auth = getAuth();
      const myUser = auth.currentUser; 
      return myUser!.getIdToken(true);
    }

    async function getNewToken(): Promise<string> {
      const value = await refreshToken() // how to unwrap the value inside this  promise
      console.log('from getNewToken: ', value)
      return value;
    }



    console.log('Flowing through HTTP Interceptor');

    if (req.method == 'POST' && req.url.startsWith(environment.firebaseConfig.databaseURL)) {
        req = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`),
            withCredentials: true
          });
      }

    return next.handle(req).pipe(/*retry(10),*/ catchError((err: HttpErrorResponse) => {
      console.log("ERROR FOUND! CHECKING TO SEE IF IT IS A 401 ERROR NEXT or CORS related. Error: ");

      if (err.error instanceof ErrorEvent) {
        console.error("A client-side or network error occurred:", err.error.message);
      } else {
        console.error(
          `Backend returned code ${err.status}, ` +
          `body was: ${JSON.stringify(err.error)}`
        );
      }

      if (err.status === 401 || err.status === 0) {
        console.log("NEW TOKEN NEEDED - Yo we got that 401 error going on - let's try and refresh that thang");

        //Refresh Token from Firebase


        console.log("Old Token: " + JSON.stringify(token));



        console.log("Attempting to refresh token now...");

        getNewToken()
          .then((newToken) => {
            console.log('New Token: ' + JSON.stringify(newToken));
            this.cookieService.set('firebaseAuthToken', newToken);
            console.log('Updated Local Storage with new token');
          })
          .then(() => {
            console.log("Here is where the request will refresh");
            return next.handle(req.clone({
              withCredentials: true,
              setHeaders: {
                Authorization: `Bearer ${this.cookieService.get('firebaseAuthToken')}`
              }
            }))
          })
          .catch((error) => {
            console.log("Error in Getting new token... Error: " + JSON.stringify(error));
          });
      }
      console.log(req)
      return throwError(() => err);
    }))
}
}

export const appInterceptorProvider: Provider =  {
    useClass: AppInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS
}












// import {
//     HttpEvent,
//     HttpHandlerFn,
//     HttpInterceptorFn,
//     HttpRequest,
// } from "@angular/common/http";
// import { inject } from "@angular/core";
// import { AngularFireAuth } from "@angular/fire/compat/auth";
// import { from, lastValueFrom } from "rxjs";
// import { environment } from "src/environments/environment.development";

// // needs to add this function because getting the token is async
// const addBearerToken = async (
//     req: HttpRequest<any>,
//     next: HttpHandlerFn,
// ): Promise<HttpEvent<any>> => {
//     const angularFireAuth = inject(AngularFireAuth);
//     const firebaseUser = await angularFireAuth.currentUser;
//     const token = await firebaseUser?.getIdToken();
//     console.log('interceptor token retrieved: ', token);
//     if (token) {
//         req = req.clone({
//             setHeaders: { 
//                 Authorization: `Bearer ${token}`
//              },

//         })
//     }
//     return lastValueFrom(next(req));
// };

// export const bearerTokenInterceptor: HttpInterceptorFn = (req, next) => {
//     // only add the bearer token to requests to the backend
//     // Note that you can customize it to only add the bearer token to certain requests
//     if (req.url.startsWith(environment.firebaseConfig.databaseURL)) {
//         // If it is, add the bearer token
//         console.log('interceptor request: ', req);

//         return from(addBearerToken(req, next));
//       } else {
//         // For other requests, proceed without adding the token
//         return next(req);
//       }
// };