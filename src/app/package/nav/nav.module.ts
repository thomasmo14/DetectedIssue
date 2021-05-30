import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,RouterModule,MatButtonModule,MatIconModule,MatMenuModule, MatToolbarModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
