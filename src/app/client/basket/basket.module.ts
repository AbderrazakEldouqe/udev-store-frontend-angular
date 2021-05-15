import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { ContainerBasketComponent } from './components/container-basket/container-basket.component';
import { ListProductsBasketComponent } from './components/list-products-basket/list-products-basket.component';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  declarations: [ContainerBasketComponent, ListProductsBasketComponent],
  imports: [CommonModule, SharedModule, BasketRoutingModule],
})
export class BasketModule {}
