/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {LoadingIntercept} from './loading-intercept';
import {LogTwoIntercept} from './log-two-intercept';
import {LogIntercept} from './log-intercept';
import {AuthInterceptor} from './auth-interceptor';


/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LogIntercept, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LogTwoIntercept, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoadingIntercept, multi: true },
];
