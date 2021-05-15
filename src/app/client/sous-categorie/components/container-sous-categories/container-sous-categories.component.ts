import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubCategorie } from 'src/app/_core/models/sub-categorie';
import { SubSink } from 'subsink';
import { SubCategorieService } from '../../services/sub-categorie.service';

@Component({
  selector: 'app-container-sous-categories',
  templateUrl: './container-sous-categories.component.html',
  styleUrls: ['./container-sous-categories.component.css'],
})
export class ContainerSousCategoriesComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  id: number | null = null;
  subCategories: SubCategorie[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private subCategorieService: SubCategorieService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getAll();
  }
  getAll(): void {
    this.subs.add(
      this.subCategorieService
        .getAllByCategorieId(this.id)
        .subscribe((res: SubCategorie[]) => {
          this.subCategories = res;
        })
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
