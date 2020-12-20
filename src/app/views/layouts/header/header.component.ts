import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { User } from 'src/app/interfaces/user'
import { LoginService } from 'src/app/services/login.service'
import { Router } from '@angular/router'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	@Input() user: User
	faBars = faBars
	@Output() toggleSidebar: EventEmitter<any> = new EventEmitter()
	constructor(private loginService: LoginService, private router: Router) {}

	ngOnInit(): void {}

	toggle() {
		this.toggleSidebar.emit()
	}

	logout(event) {
		event.preventDefault()
		this.loginService.logout().subscribe(() => {
			localStorage.removeItem('isLoggedIn')
			this.router.navigate(['/'])
		})
	}
}
