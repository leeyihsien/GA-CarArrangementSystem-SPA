import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerQueryComponent } from './passenger-query.component';

describe('PassengerQueryComponent', () => {
  let component: PassengerQueryComponent;
  let fixture: ComponentFixture<PassengerQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
