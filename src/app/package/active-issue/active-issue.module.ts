import { CardModule } from './card/card.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActiveIssueRoutingModule } from './active-issue-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveIssueComponent } from './active-issue.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
  declarations: [
    ActiveIssueComponent
  ],
  imports: [
    CommonModule,ActiveIssueRoutingModule,MatButtonModule, MatIconModule, MatToolbarModule,
  CardModule
  ],
  exports: [ActiveIssueComponent]
})
export class ActiveIssueModule { }
