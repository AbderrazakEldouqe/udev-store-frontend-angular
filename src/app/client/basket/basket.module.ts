import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { ContainerBasketComponent } from './components/container-basket/container-basket.component';
import { ListProductsBasketComponent } from './components/list-products-basket/list-products-basket.component';


@NgModule({
  declarations: [
    ContainerBasketComponent,
    ListProductsBasketComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule
  ]
})
export class BasketModule { }
