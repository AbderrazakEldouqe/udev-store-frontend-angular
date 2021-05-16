import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardShowComponent } from './components/card-show/card-show.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationsComponent } from './components/paginations/paginations.component';

@NgModule({
  declarations: [CardShowComponent, PaginationsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CardShowComponent,
    NgxPaginationModule,
    PaginationsComponent,
  ],
})
export class SharedModule {}
