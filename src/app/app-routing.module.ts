import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountOverviewComponent, AccountSecurityComponent, AccountModule } from './dashboard/account';
import { CartComponent, CartOverviewComponent, CartItemDetailsComponent, CartModule } from './dashboard/cart';
import { ProductComponent, ProductsDetailsComponent, ProductsOverviewComponent, ProductsModule } from './dashboard/products';
import { DashboardComponent, DashboardModule } from './dashboard';
import { LoginComponent, LoginModule } from './login'
import { SignUpModule, SignUpComponent } from './sign-up';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'account-overview', component: AccountOverviewComponent
      },
      {
        path: 'account-security', component: AccountSecurityComponent
      },
      {
        path: 'products', component: ProductComponent,
        children: [
          {
            path: 'product-details', component: ProductsDetailsComponent
          },
          {
            path: 'product-overview', component: ProductsOverviewComponent
          }
        ]
      }
    ]
  },  
  {
    path: 'cart',
    component: CartComponent,
    children: [
      {
        path: 'cart-overview', component: CartOverviewComponent
      },
      {
        path: 'cart-item-details', component: CartItemDetailsComponent
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [
    DashboardModule,
    AccountModule,
    CartModule,
    LoginModule,
    SignUpModule,
    ProductsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
