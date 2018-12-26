import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize, tap} from 'rxjs/internal/operators';

@Injectable()
export class LogTwoIntercept implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('log_two3');
    return next.handle(req).pipe(tap((event) => {
      console.log('LogTwoIntercept');
      // ok = event instanceof HttpResponse ? 'authInterceptor_succeeded' : '';
    }), finalize(() => {
      console.log('LogTwoIntercept_finalize');
    }));
  }
}
