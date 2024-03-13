import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastThreeProductsComponent } from './product/last-three-products/last-three-products.component';
import { AllCarsComponent } from './product/all-cars/all-cars.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { CreateCarFormComponent } from './product/create-car-form/create-car-form.component';
import { DetailsComponent } from './product/details/details.component';

const routes: Routes = [{path: '', component: LastThreeProductsComponent},
  {path: 'catalog', component: AllCarsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'add-car', component: CreateCarFormComponent},
  {path: 'details/:id', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
