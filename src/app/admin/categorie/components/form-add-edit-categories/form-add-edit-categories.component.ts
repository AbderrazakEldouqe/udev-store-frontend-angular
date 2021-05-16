import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categorie } from 'src/app/_core/models/categorie';
import { JsService } from 'src/app/_core/services/js.service';

@Component({
  selector: 'app-form-add-edit-categories',
  templateUrl: './form-add-edit-categories.component.html',
  styleUrls: ['./form-add-edit-categories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormAddEditCategoriesComponent implements OnInit, OnChanges {
  @Output() storeEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @Input() categorie: Categorie | null = null;
  form: FormGroup;
  @Output() backToListEvent = new EventEmitter();
  constructor(private jsService: JsService) {}

  ngOnInit(): void {
    this.initialFormGroupe();
  }
  initialFormGroupe(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      image: new FormControl(
        'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
        [Validators.required]
      ),
    });
  }

  onSubmit(): void {
    if (this.categorie) {
      this.update();
    } else {
      this.store();
    }
  }

  store(): void {
    this.storeEvent.emit(this.form.value);
    this.form.reset();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.categorie) {
      this.form.patchValue({
        name: this.categorie.name,
        image:
          'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
      });
    }
  }

  update(): void {
    const updatedCategorie = this.jsService.addElementToObject(
      this.form.value,
      'id',
      this.categorie.id
    );
    this.updateEvent.emit(updatedCategorie);
    this.form.reset();
    this.categorie = null;
  }

  back(): void {
    this.form.reset();
    this.backToListEvent.emit();
  }
}
