// http-interceptor-providers.ts
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './spinner.interceptor';
import { HttpErrorInterceptor } from './errors/http-error.interceptor';
import { GlobalErrorHandler } from './errors/global-error-handler';
import { ErrorHandler } from '@angular/core';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
  },
  {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptor,
    multi: true,
  },
];
