import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
  }
  remember = false
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(event: Event) {
    event.preventDefault()
    console.log(this.credentials, this.remember)
    return this.loginService.initializeCSRFToken().subscribe(() => {
      return this.loginService.login(this.credentials, this.remember).subscribe((response) => {
        console.log(response)
      })
    });
  }

}
