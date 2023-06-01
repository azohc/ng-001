import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  private categoryFilterSubject = new BehaviorSubject('');
  categoryFilter$ =
    this.categoryFilterSubject.asObservable();

  private keywordFilterSubject = new BehaviorSubject('');
  keywordFilter$ = this.keywordFilterSubject.asObservable();

  setCategoryFilter(category: string) {
    this.categoryFilterSubject.next(category);
  }

  setKeywordFilter(query: string) {
    this.keywordFilterSubject.next(query);
  }
}
