import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { EmailDirective } from '../email.directive';
import { matchPassValidator } from '../pass-matching-validator';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){}

  register(): void{
    if(this.form.invalid){
      return;
    }

    const {
      email,
      passGroup: {password} = {}
    } = this.form.value;


    this.authService.registerWithEmailAndPassword(email!, password!).then((res: any) => {
      console.log(res);
      this.router.navigateByUrl('/')
    }).catch((err: any) => {
      console.log(err)
    })

  }

  emailValidator(control: AbstractControl): ValidationErrors | null {
    return EmailDirective.emailValidator(control);
  }

}
