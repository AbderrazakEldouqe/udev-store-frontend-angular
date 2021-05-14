import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SousCategorieRoutingModule } from './sous-categorie-routing.module';
import { ContainerSousCategoriesComponent } from './components/container-sous-categories/container-sous-categories.component';

@NgModule({
  declarations: [
    ContainerSousCategoriesComponent
  ],
  imports: [CommonModule, SousCategorieRoutingModule],
})
export class SousCategorieModule {}
