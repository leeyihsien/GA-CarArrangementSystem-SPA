import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverQueryComponent } from './driver-query.component';

describe('DriverQueryComponent', () => {
  let component: DriverQueryComponent;
  let fixture: ComponentFixture<DriverQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
