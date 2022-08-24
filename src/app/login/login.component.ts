import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  constructor(private loginService: LoginService, private router: Router) {}

  async login() {
    // let a = !!this.username;
    // let b = !!this.password;
    if (!(!!this.username && !!this.password)) {
      this.errorMessage = 'Please fill all fields';
      return;
    }
    try {
      const result = await this.loginService.login({
        username: this.username,
        password: this.password,
      });
      if (result) {
        this.router.navigateByUrl('/home');
      } else {
        this.errorMessage = 'Invalid Login';
      }
    } catch (er) {
      this.errorMessage = 'Login Failed';
    }
  }
}
