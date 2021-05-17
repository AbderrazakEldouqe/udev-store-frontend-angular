import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardShowComponent } from './components/card-show/card-show.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationsComponent } from './components/paginations/paginations.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DragDropDirective } from './derictives/drag-drop.directive';

@NgModule({
  declarations: [CardShowComponent, PaginationsComponent, DragDropDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CardShowComponent,
    NgxPaginationModule,
    PaginationsComponent,
    Ng2SearchPipeModule,
  ],
})
export class SharedModule {}
