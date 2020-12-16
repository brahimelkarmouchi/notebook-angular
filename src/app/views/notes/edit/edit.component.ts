import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Note } from 'src/app/interfaces/note'
import { NotesService } from 'src/app/services/notes.service'

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
	note: Note = null
	constructor(
		private notesService: NotesService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		const id = +this.route.snapshot.paramMap.get('id')
		this.notesService.getNote(id).subscribe((note) => (this.note = note))
	}
}
