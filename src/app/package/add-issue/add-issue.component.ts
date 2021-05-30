import { FbBaseService } from './../../services/fb-base.service';
import { DetectedIssue } from './../../shared/models/detected-Issue';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.scss']
})
export class AddIssueComponent implements OnInit {
  form: FormGroup = new FormGroup({
    author: new FormGroup({
        display: new FormControl('')
      }),
    status: new FormControl('', [Validators.required]),
    details: new FormControl(''),
  });
  constructor(private service: FbBaseService) { }
  save(): void {
    this.service.add('issues',this.form.value as DetectedIssue);
  }
  ngOnInit(): void{}

}

