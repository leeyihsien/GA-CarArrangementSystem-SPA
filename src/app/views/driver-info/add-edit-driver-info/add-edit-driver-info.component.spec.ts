import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDriverInfoComponent } from './add-edit-driver-info.component';

describe('AddEditDriverInfoComponent', () => {
  let component: AddEditDriverInfoComponent;
  let fixture: ComponentFixture<AddEditDriverInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditDriverInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDriverInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
