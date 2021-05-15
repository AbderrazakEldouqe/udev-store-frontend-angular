import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_core/models/product';

@Component({
  selector: 'app-card-show-product',
  templateUrl: './card-show-product.component.html',
  styleUrls: ['./card-show-product.component.css'],
})
export class CardShowProductComponent implements OnInit {
  @Input() product: Product | null = null;
  constructor() {}

  ngOnInit(): void {}
}
