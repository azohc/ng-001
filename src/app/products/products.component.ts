import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from '../core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent
  implements OnInit, OnDestroy
{
  subscription = new Subscription();
  products: Product[] = [];
  cartItems: Product[] = [];
  productCategories = new Map<string, number>();
  categoryFilter?: string;

  keywordFilter?: string;

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.subscription =
      this.productsService.products$.subscribe(
        (products) => {
          this.products = products;
          this.populateCategories(products);
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get catalogueProducts() {
    if (!this.categoryFilter) return this.products;
    return this.products.filter(
      (product) => product.category === this.categoryFilter
    );
  }

  private populateCategories(products: Product[]) {
    products.forEach((product) => {
      const { category } = product;
      const numProducts =
        this.productCategories.get(category);
      this.productCategories.set(
        category,
        numProducts ? numProducts + 1 : 1
      );
    });
  }

  handleAddedToCartEvent(id: number) {
    const item = this.products.find(
      (product) => product.id === id
    );
    if (!item) {
      throw new Error(
        `failed to add product with id ${id} to cart`
      );
    }
    this.cartItems.push(item);
  }

  setCategoryFilter(category: string) {
    this.categoryFilter = category;
  }

  setKeywordFilter(query: string) {
    this.keywordFilter = query;
  }
}
