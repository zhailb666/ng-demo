import {HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {finalize, tap} from 'rxjs/internal/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('authInterceptor1');
    // Get the auth token from the service.
    // const authToken = this.auth.getAuthorizationToken();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'can from server')
    });
    // let ok: string;
    // send cloned request with header to the next handler.
    return next.handle(authReq).pipe(tap((event) => {
      console.log('authInterceptor');
      // ok = event instanceof HttpResponse ? 'authInterceptor_succeeded' : '';
    }), finalize(() => {
      console.log('authInterceptor_finalize');
    }));
  }
}
