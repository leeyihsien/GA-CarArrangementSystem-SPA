import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarArrangementComponent } from './car-arrangement.component';

describe('CarArrangementComponent', () => {
  let component: CarArrangementComponent;
  let fixture: ComponentFixture<CarArrangementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarArrangementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarArrangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
