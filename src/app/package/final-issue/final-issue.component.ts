import { FbBaseService } from './../../services/fb-base.service';
import { Observable } from 'rxjs';
import { DetectedIssue } from './../../shared/models/detected-Issue';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-issue',
  templateUrl: './final-issue.component.html',
  styleUrls: ['./final-issue.component.scss']
})
export class FinalIssueComponent implements OnInit {

  list: Observable<DetectedIssue[]> | null = null;
  constructor(private service: FbBaseService) { }

  get(){
    this.list = this.service.get('issues');
  }
  ngOnInit(): void {
    this.get()
  }

}
