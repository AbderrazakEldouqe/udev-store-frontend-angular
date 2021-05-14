import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotFoundError } from 'src/app/_shared/exceptions/not-found-error';
import { ValidationServerError } from 'src/app/_shared/exceptions/validation-server-error';
import { BadInputError } from 'src/app/_shared/exceptions/bad-input-error';
import { AppError } from 'src/app/_shared/exceptions/app-error';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const skipIntercept = request.headers.has('skip_http_error_interceptor');
    if (skipIntercept) {
      return next.handle(request);
    }
    return next
      .handle(request)
      .pipe(catchError((err) => this.handleError(err)));
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    let err;
    if (error.status === 404) {
      err = new NotFoundError(error);
    } else if (error.status === 422) {
      err = new ValidationServerError(error);
    } else if (error.status === 400) {
      err = new BadInputError(error);
    } else {
      err = new AppError(error);
    }
    console.log('handleError', err);
    return throwError(err);
  }
}
