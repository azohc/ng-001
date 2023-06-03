import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prev-next-button',
  templateUrl: './prev-next-button.component.html',
  styleUrls: ['./prev-next-button.component.scss'],
})
export class PrevNextButtonComponent {
  @Input()
  disabled = false;

  @Input()
  isPrev = false;
}
