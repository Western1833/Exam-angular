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

  errorMessage: string = '';

  constructor (private router: Router, private authService: AuthService) {}

  login(form: NgForm) {
    const {email, password} = form.value;

    this.authService.login(email, password).subscribe(
      user => {
        this.authService.updateAuthState(user)
        this.router.navigate(['/']);
      },
      error => {
        console.error('Login failed:', error);
        if(error.status === 403){
          this.errorMessage = 'Incorrect username or password, please try again.'
        }else{
          this.errorMessage = 'Login failed, please try again.'
        }
      }
    );
  }

}
