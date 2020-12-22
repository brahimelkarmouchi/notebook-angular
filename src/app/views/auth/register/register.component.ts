import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from 'src/app/services/login.service'

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	credentials = {
		name: '',
		email: '',
		password: '',
		password_confirmation: '',
	}
	isLoading: boolean = false
	errors: any = {
		name: [],
		email: [],
		password: [],
		password_confirmation: [],
	}

	constructor(private loginService: LoginService, private router: Router) {}

	ngOnInit(): void {}

	register() {
		this.isLoading = true
		this.loginService.register(this.credentials).subscribe(
			() => {
				localStorage.setItem('isLoggedIn', 'true')
				this.router.navigate(['/home'])
			},
			({ error }) => {
				this.errors = error.errors
				this.isLoading = false
			}
		)
	}

	log(v) {
		console.log(v)
	}
}
