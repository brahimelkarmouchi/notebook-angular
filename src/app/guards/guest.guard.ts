import { Injectable } from '@angular/core'
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router,
} from '@angular/router'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class GuestGuard implements CanActivate {
	constructor(private router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		const isLoggedIn = localStorage.getItem('isLoggedIn')
			? localStorage.getItem('isLoggedIn') == 'true'
			: false

		if (isLoggedIn) {
			this.router.navigate(['/home'])
			return false
		}
		return true
	}
}
