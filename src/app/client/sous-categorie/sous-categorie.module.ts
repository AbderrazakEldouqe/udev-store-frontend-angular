import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SousCategorieRoutingModule } from './sous-categorie-routing.module';
import { ContainerSousCategoriesComponent } from './components/container-sous-categories/container-sous-categories.component';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  declarations: [ContainerSousCategoriesComponent],
  imports: [CommonModule, SharedModule, SousCategorieRoutingModule],
})
export class SousCategorieModule {}
