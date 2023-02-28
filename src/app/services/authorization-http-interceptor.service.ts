import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationHttpInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const credentials = btoa('user:password');
    const modifiedReq = req.clone({
      headers: req.headers
        .set('Authorization', `Basic ${credentials}`)
    });
    console.log('Interceptor works');
    return next.handle(modifiedReq);
  }
}
