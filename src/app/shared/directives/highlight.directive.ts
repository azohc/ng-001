import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnChanges {
  @Input('appHighlight')
  stringToHighlight = '';

  HIGHLIGHT_TAG_OPEN =
    '<span style="background-color: yellow">';

  HIGHLIGHT_TAG_CLOSE = '</span>';

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(): void {
    if (this.stringToHighlight) this.highlightText();
  }

  private highlightText() {
    const text = this.elementRef.nativeElement.innerHTML;

    this.stringToHighlight = this.stringToHighlight.trim();

    if (
      !text
        .toLowerCase()
        .includes(this.stringToHighlight.toLowerCase())
    ) {
      this.elementRef.nativeElement.innerHTML =
        text.replace(this.HIGHLIGHT_TAG_OPEN, '');
      this.elementRef.nativeElement.innerHTML =
        text.replace(this.HIGHLIGHT_TAG_CLOSE, '');
      return;
    }

    const start = text
      .toLowerCase()
      .indexOf(this.stringToHighlight.toLowerCase());
    const end = start + this.stringToHighlight.length;

    const substring = text.substring(start, end);
    const split = text.split(substring);
    this.elementRef.nativeElement.innerHTML = [
      split[0],
      this.HIGHLIGHT_TAG_OPEN,
      substring,
      this.HIGHLIGHT_TAG_CLOSE,
      split[1],
    ].join('');
  }
}
