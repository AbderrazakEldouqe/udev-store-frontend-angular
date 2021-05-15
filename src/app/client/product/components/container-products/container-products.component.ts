import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_core/models/product';
import { SubSink } from 'subsink';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-container-products',
  templateUrl: './container-products.component.html',
  styleUrls: ['./container-products.component.css'],
})
export class ContainerProductsComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  id: number | null = null;
  products: Product[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getAll();
  }
  getAll(): void {
    this.subs.add(
      this.productService
        .getAllBySubCategorieId(this.id)
        .subscribe((res: Product[]) => {
          this.products = res;
          console.log('product', this.products);
        })
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
