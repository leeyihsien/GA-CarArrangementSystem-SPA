import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCarInfoComponent } from './add-edit-car-info.component';

describe('AddEditCarInfoComponent', () => {
  let component: AddEditCarInfoComponent;
  let fixture: ComponentFixture<AddEditCarInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditCarInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
