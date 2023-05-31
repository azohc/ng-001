import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from '../core/models/product.model';
import { FacetedTab } from './catalogue/tab/faceted-tab.model';

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
  categories: FacetedTab[] = [];
  categoryFilter?: string;

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

  private populateCategories(products: Product[]) {
    const set = new Set<string>();
    products.forEach((product) => {
      set.add(product.category);
    });
    set.forEach((category) =>
      this.categories.push({ category, products: 9 })
    );
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
    // TODO leverage observables to react to a change in category
    this.categoryFilter = category;
  }
}
