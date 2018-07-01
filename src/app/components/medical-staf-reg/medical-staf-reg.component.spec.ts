import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalStafRegComponent } from './medical-staf-reg.component';

describe('MedicalStafRegComponent', () => {
  let component: MedicalStafRegComponent;
  let fixture: ComponentFixture<MedicalStafRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalStafRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalStafRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
