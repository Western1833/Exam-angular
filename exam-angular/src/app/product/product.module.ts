import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CreateCarFormComponent } from './create-car-form/create-car-form.component';
import { LastThreeProductsComponent } from './last-three-products/last-three-products.component';

@NgModule({
  declarations: [
    LastThreeProductsComponent,
    CardComponent,
    CreateCarFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LastThreeProductsComponent,
    CardComponent,
    CreateCarFormComponent
  ]
})
export class ProductModule { }
