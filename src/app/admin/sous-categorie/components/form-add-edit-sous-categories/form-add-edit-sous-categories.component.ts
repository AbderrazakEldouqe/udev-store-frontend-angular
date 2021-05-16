import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubCategorie } from 'src/app/_core/models/sub-categorie';
import { JsService } from 'src/app/_core/services/js.service';

@Component({
  selector: 'app-form-add-edit-sous-categories',
  templateUrl: './form-add-edit-sous-categories.component.html',
  styleUrls: ['./form-add-edit-sous-categories.component.css'],
})
export class FormAddEditSousCategoriesComponent implements OnInit {
  @Output() storeEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @Input() subCategorie: SubCategorie | null = null;
  form: FormGroup;
  @Output() backToListEvent = new EventEmitter();
  constructor(private jsService: JsService) {}

  ngOnInit(): void {
    //this.initialFormGroupe();
  }

  initialFormGroupe(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.subCategorie) {
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
    if (this.subCategorie) {
      this.form.patchValue({
        name: this.subCategorie.name,
      });
    }
  }
  update(): void {
    const updatedCategorie = this.jsService.addElementToObject(
      this.form.value,
      'id',
      this.subCategorie.id
    );
    this.updateEvent.emit(updatedCategorie);
    this.form.reset();
    this.subCategorie = null;
  }

  back(): void {
    //this.form.reset();
    this.backToListEvent.emit();
  }
}
