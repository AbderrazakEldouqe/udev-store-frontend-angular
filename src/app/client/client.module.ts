import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, ClientRoutingModule],
})
export class ClientModule {}
