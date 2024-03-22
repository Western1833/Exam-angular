import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from '../app-routing.module';
import { EmailDirective } from './email.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PassMatchingDirective } from './pass-matching-validator';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    EmailDirective,
    PassMatchingDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthenticationModule { }
