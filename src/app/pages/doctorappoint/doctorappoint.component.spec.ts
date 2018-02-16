import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorappointComponent } from './doctorappoint.component';

describe('DoctorappointComponent', () => {
  let component: DoctorappointComponent;
  let fixture: ComponentFixture<DoctorappointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorappointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorappointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
