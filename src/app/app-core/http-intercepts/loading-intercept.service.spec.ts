import { TestBed, inject } from '@angular/core/testing';

import { LoadingInterceptService } from './loading-intercept.service';

describe('LoadingInterceptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingInterceptService]
    });
  });

  it('should be created', inject([LoadingInterceptService], (service: LoadingInterceptService) => {
    expect(service).toBeTruthy();
  }));
});
