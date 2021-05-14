import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { ContainerCategoriesComponent } from './components/container-categories/container-categories.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { FormAddEditCategoriesComponent } from './components/form-add-edit-categories/form-add-edit-categories.component';

@NgModule({
  declarations: [
    ContainerCategoriesComponent,
    ListCategoriesComponent,
    FormAddEditCategoriesComponent
  ],
  imports: [CommonModule, SharedModule, CategorieRoutingModule],
})
export class CategorieModule {}
