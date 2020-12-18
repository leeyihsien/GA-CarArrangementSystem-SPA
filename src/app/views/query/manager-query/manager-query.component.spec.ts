import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerQueryComponent } from './manager-query.component';

describe('ManagerQueryComponent', () => {
  let component: ManagerQueryComponent;
  let fixture: ComponentFixture<ManagerQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
