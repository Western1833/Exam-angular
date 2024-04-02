import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private router: Router, private authService: AuthService) {}

  login(form: NgForm) {
    const {email, password} = form.value;

    this.authService.login(email, password).subscribe(
      user => {
        console.log('Login successful', user);
        localStorage.setItem('userData', JSON.stringify(user));
        this.authService.updateAuthState(user)
        this.router.navigate(['/']);
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }

}
