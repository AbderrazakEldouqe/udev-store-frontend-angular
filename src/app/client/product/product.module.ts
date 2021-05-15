import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ContainerProductsComponent } from './components/container-products/container-products.component';
import { CardShowProductComponent } from './components/card-show-product/card-show-product.component';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  declarations: [ContainerProductsComponent, CardShowProductComponent],
  imports: [CommonModule, SharedModule, ProductRoutingModule],
})
export class ProductModule {}
