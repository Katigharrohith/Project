import { TestBed } from '@angular/core/testing';

import { InsureserveService } from './insureserve.service';

describe('InsureserveService', () => {
  let service: InsureserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsureserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
