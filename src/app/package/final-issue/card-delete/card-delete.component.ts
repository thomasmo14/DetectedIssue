import { DetectedIssue } from './../../../shared/models/detected-Issue';
import { FbBaseService } from './../../../services/fb-base.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-delete',
  templateUrl: './card-delete.component.html',
  styleUrls: ['./card-delete.component.scss']
})
export class CardDeleteComponent implements OnInit {

  @Input() hiba2?: DetectedIssue;
  constructor(private service: FbBaseService) { }

  ngOnInit(): void {
  }
  deleteIssue(id: any){
    this.service.delete('issues',id);
  }
}
