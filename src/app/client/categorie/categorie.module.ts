import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { ContainerCategoriesComponent } from './components/container-categories/container-categories.component';

@NgModule({
  declarations: [
    ContainerCategoriesComponent
  ],
  imports: [CommonModule, CategorieRoutingModule],
})
export class CategorieModule {}
