import { CategorieService } from './../../../../client/categorie/services/categorie.service';
import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/_core/models/categorie';
import { Product } from 'src/app/_core/models/product';
import { SubCategorie } from 'src/app/_core/models/sub-categorie';
import { SubCategorieService } from 'src/app/client/sous-categorie/services/sub-categorie.service';
import { ProductService } from 'src/app/client/product/services/product.service';

@Component({
  selector: 'app-dashboard-statistic',
  templateUrl: './dashboard-statistic.component.html',
  styleUrls: ['./dashboard-statistic.component.css'],
})
export class DashboardStatisticComponent implements OnInit {
  categories: Categorie[] = [];
  subCategories: SubCategorie[] = [];
  products: Product[] = [];
  constructor(
    private categorieService: CategorieService,
    private subCategorieService: SubCategorieService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.categorieService.getAll().subscribe((res: Categorie[]) => {
      this.categories = res;
    });
    this.subCategorieService.getAll().subscribe((res: SubCategorie[]) => {
      this.subCategories = res;
    });
    this.productService.getAll().subscribe((res: Product[]) => {
      this.products = res;
    });
  }
}
