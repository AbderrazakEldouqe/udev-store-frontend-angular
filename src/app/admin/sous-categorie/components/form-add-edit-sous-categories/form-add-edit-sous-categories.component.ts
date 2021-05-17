import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategorieService } from 'src/app/client/categorie/services/categorie.service';
import { Categorie } from 'src/app/_core/models/categorie';
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
  categories: Categorie[] = [];
  form: FormGroup;
  @Output() backToListEvent = new EventEmitter();
  constructor(
    private jsService: JsService,
    private categorieService: CategorieService
  ) {}

  ngOnInit(): void {
    this.initialFormGroupe();
    this.getAllCategories();
  }
  getAllCategories(): void {
    //this.subs.add(
    this.categorieService.getAll().subscribe((res: Categorie[]) => {
      this.categories = res;
    });
    //);
  }
  initialFormGroupe(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      categorie: new FormControl(null, [Validators.required]),
      image: new FormControl(
        'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
        [Validators.required]
      ),
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
    //
    console.log('val', this.form.value);
    let object = this.jsService.objectAssign(this.form.value);
    const categ = object.categorie;
    object = this.jsService.deleteElementFromObjectByKey(object, 'categorie');
    object['category'] = { id: categ };
    console.log('val', object);
    this.storeEvent.emit(object);
    this.form.reset();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.subCategorie) {
      this.form.patchValue({
        name: this.subCategorie.name,
        categorie: this.subCategorie.category.id,
        image:
          'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
      });
    }
  }
  update(): void {
    /*const updatedCategorie = this.jsService.addElementToObject(
      this.form.value,
      'id',
      this.subCategorie.id
    );*/

    let object = this.form.value;
    const categ = object.categorie;
    object = this.jsService.deleteElementFromObjectByKey(object, 'categorie');
    object['category'] = { id: categ };
    object['id'] = this.subCategorie.id;
    console.log('val', object);
    this.updateEvent.emit(object);
    this.form.reset();
    this.subCategorie = null;
  }

  back(): void {
    this.form.reset();
    this.backToListEvent.emit();
  }
}
