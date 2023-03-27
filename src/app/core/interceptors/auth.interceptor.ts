import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Security} from "../../security";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const credentials = btoa(Security.username+':'+Security.password);
    const modifiedReq = req.clone({
      headers: req.headers
        .set('Authorization', `Basic ${credentials}`)
    });
    console.log('Interceptor works');
    return next.handle(modifiedReq);
  }
}
