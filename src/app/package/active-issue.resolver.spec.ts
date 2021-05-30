import { TestBed } from '@angular/core/testing';

import { ActiveIssueResolver } from './active-issue.resolver';

describe('ActiveIssueResolver', () => {
  let resolver: ActiveIssueResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ActiveIssueResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
