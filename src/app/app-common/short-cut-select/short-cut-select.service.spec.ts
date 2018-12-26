import { TestBed, inject } from '@angular/core/testing';

import { ShortCutSelectService } from './short-cut-select.service';

describe('ShortCutSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShortCutSelectService]
    });
  });

  it('should be created', inject([ShortCutSelectService], (service: ShortCutSelectService) => {
    expect(service).toBeTruthy();
  }));
});
