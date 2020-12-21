import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from 'src/app/services/login.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	credentials = {
		email: '',
		password: '',
	}
	remember = false
	constructor(private loginService: LoginService, private router: Router) {}

	ngOnInit(): void {}

	login() {
		return this.loginService.initializeCSRFToken().subscribe(() => {
			this.loginService
				.login(this.credentials, this.remember)
				.subscribe(() => {
					localStorage.setItem('isLoggedIn', 'true')
					this.router.navigate(['/home'])
				})
		})
	}
}
