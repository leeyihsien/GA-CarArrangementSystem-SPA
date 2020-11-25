import { TestBed } from '@angular/core/testing';

import { CarArrangementInfoService } from './car-arrangement-info.service';

describe('CarArrangementInfoService', () => {
  let service: CarArrangementInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarArrangementInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
