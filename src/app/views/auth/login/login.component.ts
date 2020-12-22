import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
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
	isLoading: boolean = false
	errors: any = {
		email: [],
		password: [],
	}

	constructor(private loginService: LoginService, private router: Router) {}

	ngOnInit(): void {}

	login() {
		this.isLoading = true
		return this.loginService.initializeCSRFToken().subscribe(() => {
			this.loginService.login(this.credentials, this.remember).subscribe(
				() => {
					localStorage.setItem('isLoggedIn', 'true')
					this.router.navigate(['/home'])
				},
				({ error }) => {
					this.errors = error.errors
					this.isLoading = false
				}
			)
		})
	}
}
