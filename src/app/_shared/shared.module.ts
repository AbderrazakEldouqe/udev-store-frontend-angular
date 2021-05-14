import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
    }),
    // ToastrModule.forRoot({
    //   toastClass: 'toast toast-bootstrap-compatibility-fix'
    // }),
    RouterModule,
  ],
  exports: [ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
