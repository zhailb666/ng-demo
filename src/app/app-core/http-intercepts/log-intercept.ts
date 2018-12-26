import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize, tap} from 'rxjs/internal/operators';

@Injectable()
export class LogIntercept implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('log_one2');
    return next.handle(req).pipe(tap((event) => {
      console.log('LogIntercept');
      // ok = event instanceof HttpResponse ? 'authInterceptor_succeeded' : '';
    }), finalize(() => {
      console.log('LogIntercept_finalize');
    }));
  }
}
