import { TestBed } from '@angular/core/testing';

import { AppinsureserveService } from './appinsureserve.service';

describe('AppinsureserveService', () => {
  let service: AppinsureserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppinsureserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
