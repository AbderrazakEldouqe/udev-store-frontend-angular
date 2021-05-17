import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Product } from 'src/app/_core/models/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProductsComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() createEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  config = {
    id: 'custom',
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: this.products.length,
  };
  filter = '';
  constructor() {}

  ngOnInit(): void {}
  create(): void {
    this.createEvent.emit(true);
  }

  edit(product: Product): void {
    this.editEvent.emit(product);
  }

  delete(product: Product): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        this.deleteEvent.emit(product);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }

  trackById(index, item): any {
    return item ? item.id : undefined;
  }
}
