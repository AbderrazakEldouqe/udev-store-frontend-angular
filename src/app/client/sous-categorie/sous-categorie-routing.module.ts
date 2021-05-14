import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerSousCategoriesComponent } from './components/container-sous-categories/container-sous-categories.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerSousCategoriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SousCategorieRoutingModule {}
