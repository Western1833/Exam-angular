import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ProductModule } from '../product/product.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    WrapperComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    AuthenticationModule,
    AppRoutingModule,
    
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    WrapperComponent
  ]
})
export class SharedModule { }
