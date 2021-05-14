import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () =>
      (await import('./client/client.module')).ClientModule,
    //canActivate: [AuthGuard],
    data: { animation: 'isRight' },
  },
  {
    path: 'admin',
    loadChildren: async () =>
      (await import('./admin/admin.module')).AdminModule,
    //canActivate: [AuthGuard],
    data: { animation: 'isRight' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
