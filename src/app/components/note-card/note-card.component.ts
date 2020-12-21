import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Note } from 'src/app/interfaces/note'

import {
	faTrash,
	faPen,
	faThumbtack,
	faTag,
} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router'

@Component({
	selector: 'app-note-card',
	templateUrl: './note-card.component.html',
	styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
	@Input() note: Note
	@Output() delete: EventEmitter<any> = new EventEmitter()
	@Output() pin: EventEmitter<any> = new EventEmitter()

	faTrash = faTrash
	faPen = faPen
	faThumbtack = faThumbtack
	faTag = faTag

	constructor(private router: Router) {}

	ngOnInit(): void {}

	edit() {
		return this.router.navigate(['/home/notes/' + this.note.id])
	}

	emitDelete($event) {
		this.delete.emit()
	}

	emitPin($event) {
		this.pin.emit()
	}
}
