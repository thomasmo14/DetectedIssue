import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';




@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,MatCardModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
