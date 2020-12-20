import { Injectable } from '@angular/core'
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpErrorResponse,
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { Router } from '@angular/router'

@Injectable()
export class UnauthenticatedInterceptor implements HttpInterceptor {
	constructor(private router: Router) {}

	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		return next.handle(request).pipe(
			tap(
				() => {},
				(err: any) => {
					if (err instanceof HttpErrorResponse) {
						if (err.status === 401) {
							localStorage.removeItem('isLoggedIn')
							this.router.navigate(['login'])
						}
					}
				}
			)
		)
	}
}
