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
import { PopupForDeleteCarComponent } from './popup-for-delete-car/popup-for-delete-car.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModuleForProducts } from './app-routing-product.module';

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
    PopupForDeleteCarComponent,
  ],
  imports: [
    AppRoutingModuleForProducts,
    CommonModule,
    FormsModule,
    MatDialogModule
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
