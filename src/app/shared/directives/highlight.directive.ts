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
    const deHighlightText = () => {
      const text = this.elementRef.nativeElement.innerHTML;
      if (text.includes(this.HIGHLIGHT_TAG_OPEN)) {
        let dehighlightedText = text.replace(
          this.HIGHLIGHT_TAG_OPEN,
          ''
        );
        dehighlightedText = dehighlightedText.replace(
          this.HIGHLIGHT_TAG_CLOSE,
          ''
        );
        this.elementRef.nativeElement.innerHTML =
          dehighlightedText;
      }
    };
    if (this.stringToHighlight) {
      deHighlightText();
      this.highlightText();
    } else {
      deHighlightText();
    }
  }

  private highlightText() {
    const numChildren =
      this.elementRef.nativeElement.children.length;
    let text: string,
      nestedText = false;
    if (numChildren === 1) {
      text = this.elementRef.nativeElement.children[0]
        .innerText as string;
      nestedText = true;
    } else if (numChildren === 0) {
      text = this.elementRef.nativeElement
        .innerText as string;
    } else {
      console.warn(
        'This directive should be used on leaf HTML elements or app-heading components'
      );
      text = this.elementRef.nativeElement.innerText;
      nestedText = true;
    }

    const regex = new RegExp(this.stringToHighlight, 'igm');
    const highlightedText = text.replace(
      regex,
      (match) =>
        `${this.HIGHLIGHT_TAG_OPEN}${match}${this.HIGHLIGHT_TAG_CLOSE}`
    );

    let targetElement = this.elementRef.nativeElement;

    while (nestedText && targetElement.children.length) {
      targetElement = targetElement.children[0];
    }
    targetElement.innerHTML = highlightedText;
  }
}
