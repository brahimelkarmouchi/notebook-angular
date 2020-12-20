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
			console.log(notes)
		})
	}

	addNote() {
		this.notesService.addNote().subscribe((note) => {
			this.router.navigate([`/home/notes/${note.id}`])
		})
	}
}
