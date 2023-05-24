import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent implements OnInit {
  @Input()
  size: 'large' | 'medium' | 'small' = 'large';

  constructor() {}

  ngOnInit(): void {}
}
