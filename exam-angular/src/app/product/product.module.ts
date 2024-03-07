import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastThreeProductsComponent } from './last-three-products/last-three-products.component';
import { BestDealComponent } from './best-deal/best-deal.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    LastThreeProductsComponent,
    BestDealComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LastThreeProductsComponent,
    BestDealComponent,
    CardComponent
  ]
})
export class ProductModule { }
