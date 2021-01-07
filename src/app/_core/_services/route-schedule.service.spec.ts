import { TestBed } from '@angular/core/testing';

import { RouteScheduleService } from './route-schedule.service';

describe('RouteScheduleService', () => {
  let service: RouteScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
