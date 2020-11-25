import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangementInfoComponent } from './arrangement-info.component';

describe('ArrangementInfoComponent', () => {
  let component: ArrangementInfoComponent;
  let fixture: ComponentFixture<ArrangementInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrangementInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrangementInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
