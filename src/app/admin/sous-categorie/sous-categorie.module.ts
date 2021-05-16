import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SousCategorieRoutingModule } from './sous-categorie-routing.module';
import { ContainerSousCategoriesComponent } from './components/container-sous-categories/container-sous-categories.component';
import { ListSousCategoriesComponent } from './components/list-sous-categories/list-sous-categories.component';
import { FormAddEditSousCategoriesComponent } from './components/form-add-edit-sous-categories/form-add-edit-sous-categories.component';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  declarations: [
    ContainerSousCategoriesComponent,
    ListSousCategoriesComponent,
    FormAddEditSousCategoriesComponent,
  ],
  imports: [CommonModule, SharedModule, SousCategorieRoutingModule],
})
export class SousCategorieModule {}
