import { TestBed } from '@angular/core/testing';

import { ArrangementInfoService } from './arrangement-info.service';

describe('CarArrangementInfoService', () => {
  let service: ArrangementInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrangementInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
