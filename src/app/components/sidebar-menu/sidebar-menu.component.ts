import { Component, Input, OnInit } from '@angular/core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Tag } from 'src/app/interfaces/tag'

@Component({
	selector: 'app-sidebar-menu',
	templateUrl: './sidebar-menu.component.html',
	styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnInit {
	@Input() tag: Tag

	isCollapsed = true
	faChevronRight = faChevronRight

	constructor() {}

	ngOnInit(): void {}

	haveNotes(): boolean {
		return this.tag.notes.length > 0
	}
}
