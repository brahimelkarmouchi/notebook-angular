import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Note } from '../interfaces/note'

@Injectable({
	providedIn: 'root',
})
export class NotesService {
	baseURL = '/api/notes'
	constructor(private http: HttpClient) {}

	getNotes(): Observable<Note[]> {
		return this.http.get<Note[]>(this.baseURL)
	}

	getNote($id: number): Observable<Note> {
		return this.http.get<Note>(`${this.baseURL}/${$id}`)
	}

	updateNote(note): Observable<Note> {
		return this.http.patch<Note>(`${this.baseURL}/${note.id}`, note)
	}

	deleteNote(id: number): Observable<any> {
		return this.http.delete(`${this.baseURL}/${id}`)
	}

	addNote(): Observable<Note> {
		return this.http.post<Note>(this.baseURL, {})
	}

	addTag(id: number, title: string): Observable<Note> {
		return this.http.post<Note>(`${this.baseURL}/${id}/tags`, {
			title,
		})
	}

	removeTag(noteId: number, tagId: number): Observable<any> {
		return this.http.delete(`${this.baseURL}/${noteId}/tags/${tagId}`)
	}
}
