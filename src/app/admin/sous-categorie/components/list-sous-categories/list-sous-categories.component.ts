import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SubCategorie } from 'src/app/_core/models/sub-categorie';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-sous-categories',
  templateUrl: './list-sous-categories.component.html',
  styleUrls: ['./list-sous-categories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListSousCategoriesComponent implements OnInit {
  @Input() subCategories: SubCategorie[] = [];
  @Output() createEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  config = {
    id: 'custom',
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: this.subCategories.length,
  };
  filter = '';
  constructor() {}

  ngOnInit(): void {}

  create(): void {
    this.createEvent.emit(true);
  }

  edit(subCategorie: SubCategorie): void {
    this.editEvent.emit(subCategorie);
  }

  delete(subCategorie: SubCategorie): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        this.deleteEvent.emit(subCategorie);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }

  trackById(index, item): any {
    return item ? item.id : undefined;
  }
}
