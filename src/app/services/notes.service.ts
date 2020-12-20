import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Note } from '../interfaces/note'

@Injectable({
	providedIn: 'root',
})
export class NotesService {
	constructor(private http: HttpClient) {}

	getNotes(): Observable<Note[]> {
		return this.http.get<Note[]>('/api/notes')
	}

	getNote($id: number): Observable<Note> {
		return this.http.get<Note>(`/api/notes/${$id}`)
	}

	updateNote(note): Observable<Note> {
		return this.http.patch<Note>(`/api/notes/${note.id}`, note)
	}

	deleteNote(note: Note): Observable<any> {
		return this.http.delete(`/api/notes/${note.id}`)
	}

	addNote(): Observable<Note> {
		return this.http.post<Note>('/api/notes', {})
	}
}
