import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from '../core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  products: Product[] = [];
  cartItems: Product[] = [];

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.subscription = this.productsService.products$.subscribe((res) => {
      this.products = res;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleAddedToCartEvent(id: number) {
    const item = this.products.find((product) => product.id === id);
    if (!item) {
      throw new Error(`failed to add product with id ${id} to cart`);
    }
    this.cartItems.push(item);
  }
}
