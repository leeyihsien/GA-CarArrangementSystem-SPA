import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRouteInfoComponent } from './add-edit-route-info.component';

describe('AddEditRouteInfoComponent', () => {
  let component: AddEditRouteInfoComponent;
  let fixture: ComponentFixture<AddEditRouteInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditRouteInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditRouteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
