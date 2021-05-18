import { NotificationService } from 'src/app/_core/services/notification.service';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
  file: File;
  defaultImage = '../../../../../assets/default-upload/default.png';
  imageUrl: string | ArrayBuffer = this.defaultImage;
  constructor(
    private jsService: JsService,
    private notificationService: NotificationService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initialFormGroupe();
  }
  initialFormGroupe(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      image: new FormControl(
        'https://www.e-spincorp.com/wp-content/uploads/2019/02/img_elektroniikka-e1550203651118.jpg',
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
    this.imageUrl = this.defaultImage;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.categorie) {
      this.form.patchValue({
        name: this.categorie.name,
        image:
          'https://www.e-spincorp.com/wp-content/uploads/2019/02/img_elektroniikka-e1550203651118.jpg',
      });
      this.imageUrl = this.categorie.image as string;
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
