import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubCategorie } from 'src/app/_core/models/sub-categorie';
import { JsService } from 'src/app/_core/services/js.service';
import { NotificationService } from 'src/app/_core/services/notification.service';
import { SubSink } from 'subsink';
import { SousCategorieService } from '../../services/sous-categorie.service';

@Component({
  selector: 'app-container-sous-categories',
  templateUrl: './container-sous-categories.component.html',
  styleUrls: ['./container-sous-categories.component.css'],
})
export class ContainerSousCategoriesComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  subCategories: SubCategorie[] = [];
  formIsShow = false;
  selectedSubCategorie: SubCategorie = null;
  constructor(
    private sousCategorieService: SousCategorieService,
    private notification: NotificationService,
    private jsService: JsService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.subs.add(
      this.sousCategorieService.getAll().subscribe((res: SubCategorie[]) => {
        this.subCategories = res;
      })
    );
  }

  showForm(): void {
    this.formIsShow = true;
  }
  backToList(): void {
    this.selectedSubCategorie = null;
    this.formIsShow = false;
  }
  store(subCategorie: SubCategorie): void {
    this.subs.add(
      this.sousCategorieService
        .create(subCategorie)
        .subscribe((res: SubCategorie) => {
          this.handleResponseStore(res);
        })
    );
  }

  handleResponseStore(data: SubCategorie): void {
    this.subCategories = this.jsService.spread(this.subCategories, data);
    this.notification.success('Sub Categorie bien crée !', 'bien crée !');
    this.formIsShow = false;
  }

  edit(subCategorie: SubCategorie): void {
    this.selectedSubCategorie = this.jsService.objectAssign(subCategorie);
    this.showForm();
  }

  update(subCategorie: SubCategorie): void {
    const id = subCategorie.id;
    /*subCategorie = this.jsService.deleteElementFromObjectByKey(
      subCategorie,
      'id'
    );*/
    this.subs.add(
      this.sousCategorieService
        .update(id, subCategorie)
        .subscribe((res: SubCategorie) => {
          this.handleResponseUpdate(res);
        })
    );
  }
  handleResponseUpdate(data: SubCategorie): void {
    this.subCategories = this.jsService.modifyObjectElementFromArrayByKey(
      this.subCategories,
      data,
      'id'
    );
    this.notification.success(`Sub Categorie bien Modfiee !`, 'bien Modfiee !');
    this.formIsShow = false;
  }

  delete(subCategorie: SubCategorie): void {
    const id = subCategorie.id;
    this.subs.add(
      this.sousCategorieService.delete(id).subscribe((res: SubCategorie) => {
        this.handleResponseDelete(subCategorie);
      })
    );
  }

  handleResponseDelete(data: SubCategorie): void {
    this.subCategories = this.jsService.spread(
      this.jsService.deleteObjectElementFromArrayByKey(
        this.subCategories,
        data,
        'id'
      )
    );
    this.notification.success(
      `Sub Categorie bien supprimer !`,
      'bien supprimer !'
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
