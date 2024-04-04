import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable()

class AppInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const storedLocalData = JSON.parse(localStorage.getItem('userData')!);
        const token = storedLocalData?.accessToken;

        if(req.url.startsWith('/users')){
            req = req.clone({
                url: req.url.replace('/users', `${environment.urlAuth}`),
            });
        }else if(req.url.endsWith('/logout')){
            req = req.clone( {
                url: `${environment.urlAuth}/logout`,
                setHeaders: { 'X-Authorization': token || '' }
            });
        }else if(req.url.endsWith('/cars') && req.method == 'POST') {
            req = req.clone({
                url: `${environment.urlData}/cars`,
                setHeaders: {'X-Authorization': token || '' }
            });
        }else if(req.method == 'DELETE') {
            req = req.clone({
                setHeaders: {'X-Authorization': token || '' }
            });
        }else if(req.method == 'PUT'){
            req = req.clone({
                setHeaders: {'X-Authorization': token || ''}
            })
        }
        console.log(req);

        return next.handle(req);
    }
}

export const appInterceptorProvider: Provider =  {
    useClass: AppInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS
}