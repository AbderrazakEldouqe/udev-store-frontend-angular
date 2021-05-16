import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardShowComponent } from './components/card-show/card-show.component';

@NgModule({
  declarations: [CardShowComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  exports: [ReactiveFormsModule, FormsModule, CardShowComponent],
})
export class SharedModule {}
