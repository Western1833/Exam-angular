import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { EmailDirective } from '../email.directive';
import { matchPassValidator } from '../pass-matching-validator';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


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

  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService){}

  register(): void{
    if(this.form.invalid){
      return;
    }

    const {email, username, passGroup: {password} = {}} = this.form.value;

    this.authService.register(email!, password!, username!).subscribe(() => {
      this.router.navigate(['/login']);
    },error => {
      if(error.status === 409){
        this.errorMessage = 'Email already exists!';
      }else{
        this.errorMessage = 'Failed to register, please try again.';
      }
    });
  }

  emailValidator(control: AbstractControl): ValidationErrors | null {
    return EmailDirective.emailValidator(control);
  }

}
