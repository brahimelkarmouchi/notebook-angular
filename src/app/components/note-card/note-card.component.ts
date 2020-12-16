import { Component, Input, OnInit } from '@angular/core'
import { Note } from 'src/app/interfaces/note'

import {
	faTrash,
	faPen,
	faThumbtack,
	faTag,
} from '@fortawesome/free-solid-svg-icons'

@Component({
	selector: 'app-note-card',
	templateUrl: './note-card.component.html',
	styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
	@Input() note: Note

	faTrash = faTrash
	faPen = faPen
	faThumbtack = faThumbtack
	faTag = faTag

	constructor() {}

	ngOnInit(): void {}
}
