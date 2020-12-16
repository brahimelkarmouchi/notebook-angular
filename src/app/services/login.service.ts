import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	baseUrl: string = ''
	constructor(private http: HttpClient) {}

	initializeCSRFToken() {
		return this.http.get('/sanctum/csrf-cookie')
	}

	login(credentials: Object, remember: boolean): Observable<any> {
		let data: Object
		if (remember) {
			data = {
				...credentials,
				remember: remember,
			}
		} else {
			data = credentials
		}
		return this.http.post('/api/login', data, { observe: 'response' })
	}
}
