import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/client/product/services/product.service';
import { Product } from 'src/app/_core/models/product';
import { JsService } from 'src/app/_core/services/js.service';
import { NotificationService } from 'src/app/_core/services/notification.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-container-products',
  templateUrl: './container-products.component.html',
  styleUrls: ['./container-products.component.css'],
})
export class ContainerProductsComponent implements OnInit {
  private subs = new SubSink();
  products: Product[] = [];
  formIsShow = false;
  selectedProduct: Product = null;
  constructor(
    private productService: ProductService,
    private notification: NotificationService,
    private jsService: JsService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void {
    this.subs.add(
      this.productService.getAll().subscribe((res: Product[]) => {
        this.products = res;
      })
    );
  }
  showForm(): void {
    this.formIsShow = true;
  }
  backToList(): void {
    this.selectedProduct = null;
    this.formIsShow = false;
  }
  store(product: Product): void {
    this.subs.add(
      this.productService.create(product).subscribe((res: Product) => {
        this.handleResponseStore(res);
      })
    );
  }
  handleResponseStore(data: Product): void {
    this.products = this.jsService.spread(this.products, data);
    this.notification.success('Product bien crée !', 'bien crée !');
    this.formIsShow = false;
  }
  edit(product: Product): void {
    this.selectedProduct = this.jsService.objectAssign(product);
    this.showForm();
  }
  update(product: Product): void {
    const id = product.id;
    /*subCategorie = this.jsService.deleteElementFromObjectByKey(
      subCategorie,
      'id'
    );*/
    this.subs.add(
      this.productService.update(id, product).subscribe((res: Product) => {
        this.handleResponseUpdate(res);
      })
    );
  }
  handleResponseUpdate(data: Product): void {
    this.products = this.jsService.modifyObjectElementFromArrayByKey(
      this.products,
      data,
      'id'
    );
    this.notification.success(`Product bien Modfiee !`, 'bien Modfiee !');
    this.formIsShow = false;
  }
  delete(product: Product): void {
    const id = product.id;
    this.subs.add(
      this.productService.delete(id).subscribe((res: Product) => {
        this.handleResponseDelete(product);
      })
    );
  }
  handleResponseDelete(data: Product): void {
    this.products = this.jsService.spread(
      this.jsService.deleteObjectElementFromArrayByKey(
        this.products,
        data,
        'id'
      )
    );
    this.notification.success(`product bien supprimer !`, 'bien supprimer !');
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
