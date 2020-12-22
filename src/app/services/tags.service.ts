import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Tag } from '../interfaces/tag'

@Injectable({
	providedIn: 'root',
})
export class TagsService {
	baseURL: string = '/api/tags'
	constructor(private http: HttpClient) {}

	getTags(): Observable<Tag[]> {
		return this.http.get<Tag[]>(this.baseURL)
	}

	deleteTag(id: number): Observable<any> {
		return this.http.delete(`${this.baseURL}/${id}`)
	}
}
