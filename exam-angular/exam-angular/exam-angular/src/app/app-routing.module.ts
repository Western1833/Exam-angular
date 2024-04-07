import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastThreeProductsComponent } from './product/last-three-products/last-three-products.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { Page404Component } from './page404/page404.component';
import { AuthGuardForAuthUsersService } from './services/auth-guard-for-auth-users.service';

const routes: Routes = [{path: '', component: LastThreeProductsComponent},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuardForAuthUsersService]},
  {path: 'data', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuardForAuthUsersService]},
  {path: 'logout', redirectTo: '/login'},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
