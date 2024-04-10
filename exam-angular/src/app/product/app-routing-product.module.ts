import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastThreeProductsComponent } from './last-three-products/last-three-products.component';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { CreateCarFormComponent } from './create-car-form/create-car-form.component';
import { DetailsComponent } from './details/details.component';
import { MyCarsComponent } from './my-cars/my-cars.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuardService } from '../services/auth-guard.service';

const routesForProducts: Routes = [{path: '', component: LastThreeProductsComponent},
  {path: 'catalog', component: AllCarsComponent},
  {path: 'my-cars', component: MyCarsComponent, canActivate: [AuthGuardService]},
  {path: 'add-car', component: CreateCarFormComponent, canActivate: [AuthGuardService]},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'edit/:id', component: EditComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routesForProducts)],
  exports: [RouterModule]
})
export class AppRoutingModuleForProducts { }