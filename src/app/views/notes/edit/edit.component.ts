import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import {
	faInfo,
	faSave,
	faTag,
	faTimes,
	faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { Alert } from 'src/app/classes/alert'
import { Note } from 'src/app/interfaces/note'
import { Tag } from 'src/app/interfaces/tag'
import { NotesService } from 'src/app/services/notes.service'

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
	note: Note
	tags: Tag[]
	showAlert: boolean = false
	alert: Alert = new Alert(true, false, '', '', 0)

	faTrash = faTrash
	faSave = faSave
	faInfo = faInfo
	faTimes = faTimes
	faTag = faTag

	constructor(
		private notesService: NotesService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((routeParams) => {
			this.notesService.getNote(routeParams.id).subscribe((note) => {
				this.note = note
			})
		})
	}

	updateNote() {
		// Create new alert instance to trigger changes
		this.alert = new Alert(true, true, 'seconday', 'Saving ...', 0)
		this.notesService.updateNote(this.note).subscribe(() => {
			this.alert = new Alert(true, true, 'success', 'Saved!', 5000)
		})
	}

	removeTag() {
		this.alert = new Alert(true, true, 'seconday', 'Removing tag ...', 0)
		this.notesService
			.updateNote({
				id: this.note.id,
			})
			.subscribe((note) => {
				this.note = note
				this.alert = new Alert(true, true, 'success', 'removed!', 5000)
				console.log(note)
			})
	}

	deleteNote() {
		this.alert = new Alert(true, true, 'seconday', 'Deleting ...', 0)
		this.notesService.deleteNote(this.note).subscribe(() => {
			this.alert = new Alert(
				true,
				true,
				'success',
				'Note deleted successfully',
				5000
			)
			this.router.navigate(['/home'])
		})
	}

	// Handle alert's closing event
	closed(isOpen: boolean) {
		this.alert.isOpen = isOpen
	}
}
