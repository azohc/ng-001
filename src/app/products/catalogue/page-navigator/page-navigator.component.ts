import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-page-navigator',
  templateUrl: './page-navigator.component.html',
  styleUrls: ['./page-navigator.component.scss'],
})
export class PageNavigatorComponent {
  @Input()
  totalItems!: number;

  @Input()
  pageSize!: number;

  @Output()
  pageChange = new EventEmitter<number>();

  /// Local state
  currentPage = 0;
}
