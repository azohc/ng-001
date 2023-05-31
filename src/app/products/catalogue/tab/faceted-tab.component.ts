import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-faceted-tab',
  templateUrl: './faceted-tab.component.html',
  styleUrls: ['./faceted-tab.component.scss'],
})
export class FacetedTabComponent {
  @Input()
  active!: boolean;

  @Input()
  facet?: number;

  @Output()
  tabClicked = new EventEmitter();
}
