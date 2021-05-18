import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubCategorieService } from 'src/app/client/sous-categorie/services/sub-categorie.service';
import { Product } from 'src/app/_core/models/product';
import { SubCategorie } from 'src/app/_core/models/sub-categorie';
import { JsService } from 'src/app/_core/services/js.service';
import { NotificationService } from 'src/app/_core/services/notification.service';

@Component({
  selector: 'app-form-add-edit-products',
  templateUrl: './form-add-edit-products.component.html',
  styleUrls: ['./form-add-edit-products.component.css'],
})
export class FormAddEditProductsComponent implements OnInit {
  @Output() storeEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @Input() product: Product | null = null;
  subCategories: SubCategorie[] = [];
  form: FormGroup;
  @Output() backToListEvent = new EventEmitter();
  file: File;
  defaultImage = '../../../../../assets/default-upload/default.png';
  imageUrl: string | ArrayBuffer = this.defaultImage;
  constructor(
    private jsService: JsService,
    private subCategorieService: SubCategorieService,
    private notificationService: NotificationService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initialFormGroupe();
    this.getAllSubCategories();
  }
  getAllSubCategories(): void {
    //this.subs.add(
    this.subCategorieService.getAll().subscribe((res: SubCategorie[]) => {
      this.subCategories = res;
    });
    //);
  }
  initialFormGroupe(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      subCategory: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      image: new FormControl(
        'https://www.e-spincorp.com/wp-content/uploads/2019/02/img_elektroniikka-e1550203651118.jpg',
        [Validators.required]
      ),
    });
  }
  onSubmit(): void {
    if (this.product) {
      this.update();
    } else {
      this.store();
    }
  }
  store(): void {
    //
    console.log('val', this.form.value);
    let object = this.jsService.objectAssign(this.form.value);
    const subcateg = object.subCategory;
    object = this.jsService.deleteElementFromObjectByKey(object, 'subCategory');
    object['subCategory'] = { id: subcateg };
    console.log('val', object);
    this.storeEvent.emit(object);
    this.form.reset();
    this.imageUrl = this.defaultImage;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.product) {
      this.form.patchValue({
        name: this.product.name,
        subCategory: this.product.subCategory.id,
        price: this.product.price,
        quantity: this.product.quantity,
        description: this.product.description,
        image:
          'https://www.e-spincorp.com/wp-content/uploads/2019/02/img_elektroniikka-e1550203651118.jpg',
      });
      this.imageUrl = this.product.image as string;
    }
  }
  update(): void {
    /*const updatedCategorie = this.jsService.addElementToObject(
      this.form.value,
      'id',
      this.subCategorie.id
    );*/

    let object = this.form.value;
    const subcateg = object.subCategory;
    object = this.jsService.deleteElementFromObjectByKey(object, 'subCategory');
    object['subCategory'] = { id: subcateg };
    object['id'] = this.product.id;
    console.log('val', object);
    this.updateEvent.emit(object);
    this.form.reset();
    this.product = null;
    this.imageUrl = this.defaultImage;
  }
  onChange(file: File): void {
    if (file) {
      if (!this.validateFile(file.name)) {
        this.notificationService.error(
          'Selected file format is not supported',
          'image'
        );
        this.form.patchValue({ image: null });
      } else {
        this.file = file;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
          this.imageUrl = reader.result;
          this.cd.markForCheck();
        };
      }
    }
  }

  validateFile(name: string): boolean {
    const ext = name.substring(name.lastIndexOf('.') + 1);
    return (
      ext.toLowerCase() === 'png' ||
      ext.toLowerCase() === 'jpg' ||
      ext.toLowerCase() === 'jpeg'
    );
  }
  back(): void {
    this.form.reset();
    this.backToListEvent.emit();
    this.imageUrl = this.defaultImage;
  }
}
