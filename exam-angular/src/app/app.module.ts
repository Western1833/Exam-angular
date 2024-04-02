import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AdminModule } from './admin/admin.module';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { appInterceptorProvider } from './app.interceptor';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    AuthenticationModule,
    AdminModule,
    CartModule,
    ProductModule,
    ProfileModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [AuthService, appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
