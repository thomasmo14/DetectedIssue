import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDeleteComponent } from './card-delete.component';



@NgModule({
  declarations: [
    CardDeleteComponent
  ],
  imports: [
    CommonModule,MatCardModule
  ],
  exports: [CardDeleteComponent]
})
export class CardDeleteModule { }
