import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize, tap} from 'rxjs/internal/operators';


//finalize是数据返回给页面后执行的的, 无论成功或失败;
@Injectable()
export class LoadingIntercept implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('loading4');
    return next.handle(req).pipe(tap((event) => {
      console.log('LoadingIntercept');
      // ok = event instanceof HttpResponse ? 'authInterceptor_succeeded' : '';
    }), finalize(() => {
      console.log('LoadingIntercept_finalize');
    }));
  }
}
