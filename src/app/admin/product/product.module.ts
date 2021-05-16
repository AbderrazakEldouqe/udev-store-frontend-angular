import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ContainerProductsComponent } from './components/container-products/container-products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { FormAddEditProductsComponent } from './components/form-add-edit-products/form-add-edit-products.component';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  declarations: [
    ContainerProductsComponent,
    ListProductsComponent,
    FormAddEditProductsComponent,
  ],
  imports: [CommonModule, SharedModule, ProductRoutingModule],
})
export class ProductModule {}
