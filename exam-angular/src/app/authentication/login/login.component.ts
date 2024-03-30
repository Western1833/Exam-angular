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

  constructor (private authService: AuthService, private router: Router) {}

  login(form: NgForm) {
    this.authService.loginWithEmailAndPassword(form.value).then((res: any) => {
      this.router.navigateByUrl('/')
    }).catch((err: any) => {
      console.log(err)
    })
  }

}
