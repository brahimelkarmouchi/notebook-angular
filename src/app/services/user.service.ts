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

	updateUser(user: User): Observable<User> {
		return this.http.patch<User>('/api/user', user)
	}

	updateUserPassword(changePasswordForm): Observable<User> {
		return this.http.patch<User>('/api/user/password', changePasswordForm)
	}

	updateAvatar(file: File): Observable<User> {
		const formData: FormData = new FormData()
		formData.append('avatar', file, file.name)
		// Cant send formData with PATCH method
        formData.append('_method', 'PATCH') 
		return this.http.post<User>('/api/user/avatar', formData)
	}
}
