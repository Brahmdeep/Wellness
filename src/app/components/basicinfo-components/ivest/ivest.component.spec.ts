import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvestComponent } from './ivest.component';

describe('IvestComponent', () => {
  let component: IvestComponent;
  let fixture: ComponentFixture<IvestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
