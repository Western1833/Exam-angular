import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastThreeProductsComponent } from './last-three-products/last-three-products.component';



@NgModule({
  declarations: [
    LastThreeProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LastThreeProductsComponent
  ]
})
export class ProductModule { }
