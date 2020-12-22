import { Component, OnInit } from '@angular/core'
import { Alert } from 'src/app/classes/alert'
import { Tag } from 'src/app/interfaces/tag'
import { User } from 'src/app/interfaces/user'
import { TagsService } from 'src/app/services/tags.service'
import { UserService } from 'src/app/services/user.service'
import loadingMessages from 'src/assets/loading_messages'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	user: User
	tags: Tag[]
	showSidebar = localStorage.getItem('showSidebar')
		? localStorage.getItem('showSidebar') == 'true'
		: true
	loadingMessage: string
	alert: Alert = new Alert(true, false, '', '', 0)

	constructor(
		private userService: UserService,
		private tagsService: TagsService
	) {}

	ngOnInit(): void {
		this.loadingMessage =
			loadingMessages[Math.floor(Math.random() * loadingMessages.length)]
		this.userService.getUser().subscribe((user) => {
			this.user = user
		})
		this.tagsService.getTags().subscribe((tags) => {
			this.tags = tags
		})
	}

	deleteTag(tag: Tag) {
		this.tagsService.deleteTag(tag.id).subscribe(() => {
			let index = this.tags.findIndex((item) => item.id == tag.id)
			this.tags.splice(index, 1)

			this.alert = new Alert(true, true, 'success', 'Tag deleted!', 5000)
		})
	}

	toggleSidebar() {
		this.showSidebar = !this.showSidebar
		localStorage.setItem('showSidebar', this.showSidebar ? 'true' : 'false')
	}

	// Handle alert's closing event
	closed(isOpen: boolean) {
		this.alert.isOpen = isOpen
	}
}
