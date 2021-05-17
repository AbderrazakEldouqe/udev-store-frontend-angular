import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/_core/models/product';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private basketCountDatasource = new BehaviorSubject<number>(0);

  basketCount = this.basketCountDatasource.asObservable();

  constructor() {}

  changebasketCount(value: number): void {
    this.basketCountDatasource.next(value);
  }
  getProductsFromLocalStorage(): Product[] {
    let localstorageBasket: string = localStorage.getItem('basket');
    let basket: Product[];
    if (localstorageBasket) {
      basket = JSON.parse(localstorageBasket);
    } else {
      basket = [];
    }
    return basket;
  }
  addProductToBasket(product: any) {
    let basket: Product[] = this.getProductsFromLocalStorage();
    basket.push(product);
    localStorage.setItem('basket', JSON.stringify(basket));
  }
  clearBasket() {
    localStorage.removeItem('basket');
    this.basketCountDatasource.next(0);
  }
}
