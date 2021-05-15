import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../_shared/shared.module';
import { FooterComponent } from './_shared/footer/footer.component';
import { LayoutComponent } from './_shared/layout/layout.component';
import { CardShowComponent } from './_shared/card-show/card-show.component';
import { NavbarComponent } from './_shared/navbar/navbar.component';

@NgModule({
  declarations: [
    FooterComponent,
    LayoutComponent,
    CardShowComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, SharedModule, ClientRoutingModule],
})
export class ClientModule {}
