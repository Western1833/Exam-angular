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
      response => {
        // Handle successful login
        console.log('Login successful', response);
        localStorage.setItem('accessToken', response.accessToken!);
        // Redirect to desired page
        this.router.navigate(['/']);
      },
      error => {
        // Handle error
        console.error('Login failed:', error);
        // Show error message to user
      }
    );
  }

}
