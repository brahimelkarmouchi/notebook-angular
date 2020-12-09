import { Component, OnInit } from '@angular/core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

@Component({
	selector: 'app-sidebar-menu',
	templateUrl: './sidebar-menu.component.html',
	styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnInit {
	public isCollapsed = true
	faChevronRight = faChevronRight

	constructor() {}

	ngOnInit(): void {}
}
