import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdregComponent } from './opdreg.component';

describe('OpdregComponent', () => {
  let component: OpdregComponent;
  let fixture: ComponentFixture<OpdregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
