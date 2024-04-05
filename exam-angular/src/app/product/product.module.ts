import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CreateCarFormComponent } from './create-car-form/create-car-form.component';
import { LastThreeProductsComponent } from './last-three-products/last-three-products.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { AppRoutingModule } from '../app-routing.module';
import { MyCarsComponent } from './my-cars/my-cars.component';
import { DetailsFunctionalitiesComponent } from './details-functionalities/details-functionalities.component';

@NgModule({
  declarations: [
    LastThreeProductsComponent,
    CardComponent,
    CreateCarFormComponent,
    EditComponent,
    DetailsComponent,
    AllCarsComponent,
    MyCarsComponent,
    DetailsFunctionalitiesComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    LastThreeProductsComponent,
    CardComponent,
    CreateCarFormComponent,
    EditComponent,
    DetailsComponent,
    AllCarsComponent
  ]
})
export class ProductModule { }
