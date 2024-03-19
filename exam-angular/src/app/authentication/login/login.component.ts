import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login(form: NgForm) {
    console.log('email: ', form.value.email);
    console.log('password: ', form.value.password);
  }

}
