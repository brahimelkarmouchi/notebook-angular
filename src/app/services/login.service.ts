import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl: string = 'localhost:8000'
  constructor(private http: HttpClient) {}

  initializeCSRFToken() {
    return this.http.get(`${this.baseUrl}/sanctum/csrf-cookie`);
  }

  login(credentials, remember) {
    return this.http.post(`${this.baseUrl}/login`, {
      email: credentials.email,
      password: credentials.password,
      remember: remember
    });
  }
}
