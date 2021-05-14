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
          (await import('./categorie/categorie.module')).CategorieModule,
      },
      {
        path: 'categorie',
        loadChildren: async () =>
          (await import('./categorie/categorie.module')).CategorieModule,
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
      {
        path: 'basket',
        loadChildren: async () =>
          (await import('./basket/basket.module')).BasketModule,
        data: { animation: 'isRight' },
      },
      {
        path: 'auth',
        loadChildren: async () =>
          (await import('./auth/auth.module')).AuthModule,
        data: { animation: 'isLeft' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
