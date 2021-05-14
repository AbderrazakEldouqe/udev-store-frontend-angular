import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerBasketComponent } from './components/container-basket/container-basket.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerBasketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketRoutingModule {}
