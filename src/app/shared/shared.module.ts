import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottleComponent } from './bottle/bottle.component';
import { HeadingComponent } from './heading/heading.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [BottleComponent, HeadingComponent, SpinnerComponent],
  imports: [CommonModule],
})
export class SharedModule {}
