import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ContainerProductsComponent } from './components/container-products/container-products.component';
import { CardShowProductComponent } from './components/card-show-product/card-show-product.component';

@NgModule({
  declarations: [
    ContainerProductsComponent,
    CardShowProductComponent
  ],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
