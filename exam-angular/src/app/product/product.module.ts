import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastThreeProductsComponent } from './last-three-products/last-three-products.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    LastThreeProductsComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LastThreeProductsComponent,
    CardComponent
  ]
})
export class ProductModule { }
