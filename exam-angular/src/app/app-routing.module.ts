import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastThreeProductsComponent } from './product/last-three-products/last-three-products.component';
import { AllCarsComponent } from './product/all-cars/all-cars.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { CreateCarFormComponent } from './product/create-car-form/create-car-form.component';
import { DetailsComponent } from './product/details/details.component';
import { Page404Component } from './page404/page404.component';
import { MyCarsComponent } from './product/my-cars/my-cars.component';
import { EditComponent } from './product/edit/edit.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthGuardForAuthUsersService } from './services/auth-guard-for-auth-users.service';

const routes: Routes = [{path: '', component: LastThreeProductsComponent},
  {path: 'catalog', component: AllCarsComponent},
  {path: 'my-cars', component: MyCarsComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuardForAuthUsersService]},
  {path: 'add-car', component: CreateCarFormComponent, canActivate: [AuthGuardService]},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'edit/:id', component: EditComponent, canActivate: [AuthGuardService]},
  {path: 'logout', redirectTo: '/login'},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
