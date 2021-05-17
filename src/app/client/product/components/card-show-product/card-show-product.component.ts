import { BasketService } from './../../../basket/services/basket.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_core/models/product';

@Component({
  selector: 'app-card-show-product',
  templateUrl: './card-show-product.component.html',
  styleUrls: ['./card-show-product.component.css'],
})
export class CardShowProductComponent implements OnInit {
  @Input() product: Product | null = null;
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {}

  addProductToBasket(product: Product) {
    let cpt = this.basketService.getProductsFromLocalStorage().length;
    this.basketService.addProductToBasket(product);
    this.basketService.changebasketCount(cpt + 1);
  }
}
