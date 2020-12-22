import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import {
	faChevronRight,
	faClipboard,
	faTags,
	faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Tag } from 'src/app/interfaces/tag'

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
	faChevronRight = faChevronRight
	faClipboard = faClipboard
	faTags = faTags
	faTrash = faTrash
	public isCollapsed = false
	tagToDelete: Tag
	@Input() tags: Tag[]
	@Output() deleteTag: EventEmitter<Tag> = new EventEmitter<Tag>()

	constructor(private modalService: NgbModal) {}

	ngOnInit(): void {}

	showConfirmModal($event, modal, tagToDelete: Tag) {
		$event.preventDefault()
		this.tagToDelete = tagToDelete
		this.modalService.open(modal)
	}

	deleteConfirmed(modal) {
		this.deleteTag.emit(this.tagToDelete)
		modal.close()
	}
}
