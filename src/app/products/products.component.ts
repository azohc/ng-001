import { Component } from '@angular/core';
import { Product } from './types';
import { ProductService } from '../product.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Observable<Product[]> = this.productsService.getAllProducts();
  cartItems: Product[] = [];

  constructor(private productsService: ProductService) {}

  handleAddedToCartEvent(id: number) {
    // this.products.forEach((products) =>
    //   this.cartItems.push(products.filter((product) => product.id === id)[0])
    // );
    this.products
      .pipe(
        map((products) => {
          const item = products.find((product) => product.id === id);
          if (!item) {
            throw new Error(`failed to add product with id ${id} to cart`);
          }
          this.cartItems.push(item);
        })
      )
      .subscribe();
  }
}
