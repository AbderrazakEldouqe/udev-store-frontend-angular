import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../_shared/shared.module';
import { HeaderComponent } from './_shared/header/header.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { LayoutComponent } from './_shared/layout/layout.component';
import { CardShowComponent } from './_shared/card-show/card-show.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    CardShowComponent
  ],
  imports: [CommonModule, SharedModule, ClientRoutingModule],
})
export class ClientModule {}
