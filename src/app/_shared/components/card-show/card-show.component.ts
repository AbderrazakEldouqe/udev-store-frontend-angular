import { Component, Input, OnInit } from '@angular/core';
import { Categorie } from 'src/app/_core/models/categorie';

@Component({
  selector: 'app-card-show',
  templateUrl: './card-show.component.html',
  styleUrls: ['./card-show.component.css'],
})
export class CardShowComponent implements OnInit {
  @Input() data: Categorie | null = null;
  @Input() path: String | null = null;
  constructor() {}

  ngOnInit(): void {}
}
