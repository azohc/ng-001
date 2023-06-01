import {
  Directive,
  ElementRef,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input()
  appHighlight = '';

  constructor(private el: ElementRef) {
    console.log(this.appHighlight, el.nativeElement.value);
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
