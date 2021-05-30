import { MatIconModule } from '@angular/material/icon';
import { SplashScreenRoutingModule } from './splash-screen-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen.component';




@NgModule({
  declarations: [
    SplashScreenComponent
  ],
  imports: [
    CommonModule,SplashScreenRoutingModule,MatIconModule
  ]
})
export class SplashScreenModule { }
