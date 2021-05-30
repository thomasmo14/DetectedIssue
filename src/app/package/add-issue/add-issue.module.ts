import { NgModule } from '@angular/core';
import { AddIssueComponent } from './add-issue.component';
import { AddIssueRoutingModule } from './add-issue-routing.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'


@NgModule({
  declarations: [
    AddIssueComponent
  ],
  imports: [
    AddIssueRoutingModule,
    MatChipsModule,MatInputModule,MatFormFieldModule,MatButtonModule,MatCardModule,
    FormsModule,ReactiveFormsModule, MatSelectModule
  ],
  exports: [AddIssueComponent]
})
export class AddIssueModule { }
