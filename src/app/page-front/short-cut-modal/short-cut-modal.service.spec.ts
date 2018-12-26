import { TestBed, inject } from '@angular/core/testing';

import { ShortCutModalService } from './short-cut-modal.service';

describe('ShortCutModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShortCutModalService]
    });
  });

  it('should be created', inject([ShortCutModalService], (service: ShortCutModalService) => {
    expect(service).toBeTruthy();
  }));
});
