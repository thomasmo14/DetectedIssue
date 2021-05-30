import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalIssueComponent } from './final-issue.component';

describe('FinalIssueComponent', () => {
  let component: FinalIssueComponent;
  let fixture: ComponentFixture<FinalIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
