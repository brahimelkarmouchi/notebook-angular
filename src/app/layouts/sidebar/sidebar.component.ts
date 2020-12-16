import { Component, OnInit } from '@angular/core'
import {
	faChevronRight,
	faClipboard,
	faTags,
} from '@fortawesome/free-solid-svg-icons'
import { Tag } from 'src/app/interfaces/tag'
import { TagsService } from 'src/app/services/tags.service'

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
	tags: Tag[] = []

	constructor(private tagsService: TagsService) {}

	ngOnInit(): void {
		this.tagsService.getTags().subscribe(
			(tags) => {
				this.tags = tags
				// console.log(tags)
			},
			(error) => console.log(error)
		)
	}
}
