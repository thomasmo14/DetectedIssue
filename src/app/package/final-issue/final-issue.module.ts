import { CardDeleteModule } from './card-delete/card-delete.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalIssueComponent } from './final-issue.component';
import { FinalIssueRoutingModule } from './final-issue-routing.module';



@NgModule({
  declarations: [
    FinalIssueComponent
  ],
  imports: [
    CommonModule,FinalIssueRoutingModule,CardDeleteModule
  ]
})
export class FinalIssueModule { }
