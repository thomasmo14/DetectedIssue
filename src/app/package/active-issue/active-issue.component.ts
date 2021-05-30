import { AddIssueComponent } from './../add-issue/add-issue.component';
import { DetectedIssue } from './../../shared/models/detected-Issue';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FbBaseService } from './../../services/fb-base.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-active-issue',
  templateUrl: './active-issue.component.html',
  styleUrls: ['./active-issue.component.scss']
})
export class ActiveIssueComponent implements OnInit {


  list: Observable<DetectedIssue[]> | null = null;

  constructor( private service: FbBaseService) { }

  get(){
    this.list = this.service.get('issues');
  }
  ngOnInit(): void {
    this.get()
  }
  
}
