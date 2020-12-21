import { Component, HostListener, OnInit } from '@angular/core'
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
	tagTitle: string

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

	removeTag(tagId: number) {
		this.alert = new Alert(true, true, 'seconday', 'Removing tag ...', 0)
		this.notesService.removeTag(this.note.id, tagId).subscribe((note) => {
			this.note = note
			this.alert = new Alert(true, true, 'success', 'removed!', 5000)
		})
	}

	deleteNote() {
		this.alert = new Alert(true, true, 'seconday', 'Deleting ...', 0)
		this.notesService.deleteNote(this.note.id).subscribe(() => {
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

	addTag() {
		this.alert = new Alert(true, true, 'seconday', 'Adding ...', 0)
		let noteAlreadyAttached = this.note.tags.filter(
			(tag) => tag.title == this.tagTitle
		).length
		if (!noteAlreadyAttached) {
			this.notesService.addTag(this.note.id, this.tagTitle).subscribe(
				(note) => {
					this.note = note
					this.tagTitle = ''
					this.alert = new Alert(
						true,
						true,
						'success',
						'Success !',
						5000
					)
				},
				(error) => {
					this.tagTitle = ''
					this.alert = new Alert(
						true,
						true,
						'danger',
						'Something went wrong, please try again !',
						5000
					)
				}
			)
		} else {
			this.alert = new Alert(
				true,
				true,
				'warning',
				'Tag already attached',
				5000
			)
			this.tagTitle = ''
		}
	}

	// Handle alert's closing event
	closed(isOpen: boolean) {
		this.alert.isOpen = isOpen
	}
}
