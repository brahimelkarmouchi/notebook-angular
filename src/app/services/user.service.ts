import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { User } from '../interfaces/user'

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private http: HttpClient) {}

	getUser(): Observable<User> {
		return this.http.get<User>('/api/user')
	}
}
