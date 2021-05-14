import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerProductsComponent } from './components/container-products/container-products.component';

const routes: Routes = [{ path: '', component: ContainerProductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
