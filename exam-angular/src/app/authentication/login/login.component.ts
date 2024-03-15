import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //    /^[a-zA-Z]{2,}@(?=[a-zA-Z]{2,}\.)([a-zA-Z]{2,}\.)?[a-zA-Z]{2,}$/i

  loginSubmitHandler(form: NgForm) {
    if(!form){
      return;
    }
    
    const {email, password} = form?.value;

    console.log(email, password)
  }
}
