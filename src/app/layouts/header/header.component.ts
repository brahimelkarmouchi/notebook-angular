import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/interfaces/user'
import { UserService } from 'src/app/services/user.service'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	user: User = null
	constructor(private userService: UserService) {}

	ngOnInit(): void {
		this.userService.getUser().subscribe((user) => {
			this.user = user
			// console.log(user)
		})
	}
}
