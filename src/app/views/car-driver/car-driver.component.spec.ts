import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDriverComponent } from './car-driver.component';

describe('CarDriverComponent', () => {
  let component: CarDriverComponent;
  let fixture: ComponentFixture<CarDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
