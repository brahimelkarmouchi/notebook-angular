import { Component, OnInit } from '@angular/core'
import { Note } from 'src/app/interfaces/note'
import { NotesService } from 'src/app/services/notes.service'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router'

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
	faPlus = faPlus
	notes: Note[] = []
	constructor(private notesService: NotesService, private router: Router) {}

	ngOnInit(): void {
		this.notesService.getNotes().subscribe((notes) => {
			this.notes = notes
		})
	}

	pinnedNotes(): Note[] {
		return this.notes.filter((note) => note.is_pinned)
	}

	unPinnedNotes(): Note[] {
		return this.notes.filter((note) => !note.is_pinned)
	}

	deleteNote(id: number) {
		this.notesService.deleteNote(id).subscribe(() => {
			let index = this.notes.findIndex((note) => note.id == id)
			this.notes.splice(index, 1)
			/** this.alert = new Alert(
				true,
				true,
				'success',
				'Note deleted successfully',
				5000
			) **/
		})
	}

	pin(note: Note) {
		note.is_pinned = !note.is_pinned
		this.notesService.updateNote(note).subscribe((note) => {})
	}

	addNote() {
		this.notesService.addNote().subscribe((note) => {
			this.router.navigate([`/home/notes/${note.id}`])
		})
	}
}
