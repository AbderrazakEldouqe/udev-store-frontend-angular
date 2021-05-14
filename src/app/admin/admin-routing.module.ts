import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './_shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('./dashboard/dashboard.module')).DashboardModule,
      },
      {
        path: 'dashboard',
        loadChildren: async () =>
          (await import('./dashboard/dashboard.module')).DashboardModule,
      },
      {
        path: 'categorie',
        loadChildren: async () =>
          (await import('./categorie/categorie.module')).CategorieModule,
        data: { animation: 'isRight' },
      },
      {
        path: 'sous-categorie',
        loadChildren: async () =>
          (await import('./sous-categorie/sous-categorie.module'))
            .SousCategorieModule,
        data: { animation: 'isRight' },
      },
      {
        path: 'product',
        loadChildren: async () =>
          (await import('./product/product.module')).ProductModule,
        data: { animation: 'isRight' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
