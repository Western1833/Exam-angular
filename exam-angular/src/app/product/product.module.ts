import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CreateCarFormComponent } from './create-car-form/create-car-form.component';
import { LastThreeProductsComponent } from './last-three-products/last-three-products.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { CommentComponent } from './comment/comment.component';
import { SingleCommentComponent } from './single-comment/single-comment.component';
import { FormsModule } from '@angular/forms';
import { AllCarsComponent } from './all-cars/all-cars.component';

@NgModule({
  declarations: [
    LastThreeProductsComponent,
    CardComponent,
    CreateCarFormComponent,
    EditComponent,
    DetailsComponent,
    CommentComponent,
    SingleCommentComponent,
    AllCarsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LastThreeProductsComponent,
    CardComponent,
    CreateCarFormComponent,
    EditComponent,
    DetailsComponent,
    CommentComponent,
    AllCarsComponent
  ]
})
export class ProductModule { }
