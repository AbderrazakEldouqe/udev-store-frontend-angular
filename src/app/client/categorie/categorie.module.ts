import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { ContainerCategoriesComponent } from './components/container-categories/container-categories.component';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  declarations: [ContainerCategoriesComponent],
  imports: [CommonModule, SharedModule, CategorieRoutingModule],
})
export class CategorieModule {}
