import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { RatingComponent } from './components/rating/rating.component';



@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    CommonModule,
    MatIcon
  ],
  exports: [
    RatingComponent
  ]
})
export class SharedModule { }
