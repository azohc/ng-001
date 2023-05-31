import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  private categoryFilterSubject =
    new BehaviorSubject<string>('');
  categoryFilter$ =
    this.categoryFilterSubject.asObservable();

  setCategoryFilter(category: string) {
    this.categoryFilterSubject.next(category);
  }
}
