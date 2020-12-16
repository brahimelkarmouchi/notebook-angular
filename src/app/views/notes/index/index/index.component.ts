import { Component, OnInit } from '@angular/core'
import { Note } from 'src/app/interfaces/note'
import { NotesService } from 'src/app/services/notes.service'

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
	notes: Note[] = []
	constructor(private notesService: NotesService) {}

	ngOnInit(): void {
		this.notesService.getNotes().subscribe((notes) => {
			this.notes = notes
			console.log(notes)
		})
	}
}
