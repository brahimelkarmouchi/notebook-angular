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
	constructor(private loginService: LoginService, private router: Router) {}

	ngOnInit(): void {}

	register() {
		this.loginService.register(this.credentials).subscribe(() => {
			localStorage.setItem('isLoggedIn', 'true')
			this.router.navigate(['/home'])
		})
	}
}
