import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceComponent } from './sce.component';

describe('SceComponent', () => {
  let component: SceComponent;
  let fixture: ComponentFixture<SceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
