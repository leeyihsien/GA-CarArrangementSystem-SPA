import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteScheduleComponent } from './route-schedule.component';

describe('RouteScheduleComponent', () => {
  let component: RouteScheduleComponent;
  let fixture: ComponentFixture<RouteScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
