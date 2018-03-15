import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartOverviewComponent } from './cart-overview/cart-overview.component';
import { CartItemDetailsComponent } from './cart-item-details/cart-item-details.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CartOverviewComponent, CartItemDetailsComponent, CartComponent],
  exports: [CartOverviewComponent, CartItemDetailsComponent, CartComponent]
})
export class CartModule { }
