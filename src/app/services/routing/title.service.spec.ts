import { TestBed } from '@angular/core/testing';

import { TitleService } from './title.service';
import { RouterModule, NavigationEnd } from '@angular/router';
import { Subscription, of } from 'rxjs';

describe('TitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterModule.forRoot([])]
  }));

  it('should be created', () => {
    const service: TitleService = TestBed.inject(TitleService);
    expect(service).toBeTruthy();
  });

  it('refreshTitle to be correct', () => {
    const testValues = {
      navigationEnd: { id: 3, url: 'urlTest', urlAfterRedirects: 'urlAfterRedirectsTest' },
      routerState: { root: '/rootTest' }
    };

    const mockTest = {
  
      titleSet: '',
    
      routerState: undefined,
      root: '',
      separator: '',
     
      router: {
        events:
          of(new NavigationEnd(testValues.navigationEnd.id, testValues.navigationEnd.url, testValues.navigationEnd.urlAfterRedirects)),
        routerState: { root: testValues.routerState.root },
      },
      refreshTitle: TestBed.inject(TitleService).refreshTitle
    };

    mockTest.refreshTitle();

   
    expect(mockTest.root).toBe(testValues.routerState.root);
    expect(mockTest.separator).toBe('-');
  
  });

  it('should getTitle to be correct', () => {
    const testValue = 'titleTest';
    const state = {
      parent: undefined,
  
    };
    const parent = {
      snapshot: { data: { title: testValue } }
    };
    const mockTest = {
      getTitle: TestBed.inject(TitleService).getTitle
    };

 
  });
});