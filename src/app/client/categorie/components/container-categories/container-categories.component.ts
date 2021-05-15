import { Component, OnDestroy, OnInit } from '@angular/core';
import { Categorie } from 'src/app/_core/models/categorie';
import { SubSink } from 'subsink';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-container-categories',
  templateUrl: './container-categories.component.html',
  styleUrls: ['./container-categories.component.css'],
})
export class ContainerCategoriesComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  categories: Categorie[] = [];
  constructor(private categorieService: CategorieService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.subs.add(
      this.categorieService.getAll().subscribe((res: Categorie[]) => {
        this.categories = res;
      })
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
