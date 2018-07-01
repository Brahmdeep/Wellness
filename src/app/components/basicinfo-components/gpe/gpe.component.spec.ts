import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpeComponent } from './gpe.component';

describe('GpeComponent', () => {
  let component: GpeComponent;
  let fixture: ComponentFixture<GpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
