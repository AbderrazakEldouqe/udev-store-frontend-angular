import { Product } from 'src/app/_core/models/product';
import { BasketService } from './../../services/basket.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container-basket',
  templateUrl: './container-basket.component.html',
  styleUrls: ['./container-basket.component.css'],
})
export class ContainerBasketComponent implements OnInit {
  basket: Product[] = [];
  subTotal = 0;
  constructor(private basketService: BasketService, private router: Router) {}

  ngOnInit(): void {
    this.basket = this.basketService.getProductsFromLocalStorage();
    this.calculSubTotal();
  }
  calculSubTotal() {
    this.basket.map((p) => {
      this.subTotal += p.price;
      return p;
    });
  }
  checkout() {
    this.basketService.clearBasket();
    this.router.navigateByUrl('/');
  }
}
