import { TestBed } from '@angular/core/testing';

import { DriverInfoService } from './driver-info.service';

describe('DriverInfoService', () => {
  let service: DriverInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
