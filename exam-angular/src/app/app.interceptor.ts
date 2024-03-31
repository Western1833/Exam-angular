import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable()

class AppInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.url.startsWith('/users')){
            req = req.clone({
                url: req.url.replace('/users', `${environment.urlAuth}`),
            });
        }else if(req.url.endsWith('/logout')){
            const token = localStorage.getItem('accessToken');
            req = req.clone( {
                url: `${environment.urlAuth}/logout`,
                setHeaders:{ 'X-Authorization': token || '' }
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