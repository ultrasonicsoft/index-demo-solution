import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsOverviewComponent } from './products-overview/products-overview.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductsOverviewComponent, ProductsDetailsComponent, ProductComponent],
  exports: [ProductsOverviewComponent, ProductsDetailsComponent, ProductComponent]
})
export class ProductsModule { }
