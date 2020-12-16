import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Tag } from '../interfaces/tag'

@Injectable({
	providedIn: 'root',
})
export class TagsService {
	constructor(private http: HttpClient) {}

	getTags(): Observable<Tag[]> {
		return this.http.get<Tag[]>('/api/tags')
	}
}
