import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../basket/services/basket.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private basketService: BasketService) {}
  basketcpt: number = 0;
  ngOnInit(): void {
    this.basketService.basketCount.subscribe((res) => {
      this.basketcpt = res;
    });
    this.basketService.changebasketCount(
      this.basketService.getProductsFromLocalStorage().length
    );
  }
}
