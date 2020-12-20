import { Component, Input, OnInit } from '@angular/core'
import {
	faChevronRight,
	faClipboard,
	faTags,
} from '@fortawesome/free-solid-svg-icons'
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
	public isCollapsed = false
	@Input() tags: Tag[]

	constructor() {}

	ngOnInit(): void {}
}
