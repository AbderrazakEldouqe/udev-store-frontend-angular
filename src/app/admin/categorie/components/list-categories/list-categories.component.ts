import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Categorie } from 'src/app/_core/models/categorie';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCategoriesComponent implements OnInit {
  @Input() categories: Categorie[] = [];
  @Output() createEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  config = {
    id: 'custom',
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: this.categories.length,
  };
  filter = '';
  constructor() {}

  ngOnInit(): void {}
  create(): void {
    this.createEvent.emit(true);
  }

  edit(categorie: Categorie): void {
    this.editEvent.emit(categorie);
  }

  delete(categorie: Categorie): void {
    /*Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        this.deleteEvent.emit(categorie);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });*/
  }

  trackById(index, item): any {
    return item ? item.id : undefined;
  }
}
