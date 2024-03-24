import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { EmailDirective } from '../email.directive';
import { matchPassValidator } from '../pass-matching-validator';


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

  constructor(private fb: FormBuilder){}

  register(): void{
    if(this.form.invalid){
      return;
    }

    console.log(this.form.value)

  }

  emailValidator(control: AbstractControl): ValidationErrors | null {
    return EmailDirective.emailValidator(control);
  }

}
