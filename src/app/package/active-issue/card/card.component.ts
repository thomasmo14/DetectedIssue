import { DetectedIssue } from './../../../shared/models/detected-Issue';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'issue-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() hiba?: DetectedIssue;
  
  constructor() { }

  ngOnInit(): void {
  }

}
