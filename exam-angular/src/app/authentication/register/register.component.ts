import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { EmailDirective } from '../email.directive';
import { matchPassValidator } from '../pass-matching-validator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    email: ['', Validators.required],
    username: ['', [Validators.required, Validators.minLength(4)]],
    passGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      rePass: []
    }, {
      validators: [matchPassValidator('password', 'rePass')]
    })
  })

  constructor(private fb: FormBuilder, private router: Router){}

  register(): void{
    if(this.form.invalid){
      return;
    }
  }

  emailValidator(control: AbstractControl): ValidationErrors | null {
    return EmailDirective.emailValidator(control);
  }

}
