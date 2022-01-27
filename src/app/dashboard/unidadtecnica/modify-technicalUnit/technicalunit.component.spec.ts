import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalunitComponent } from './technicalunit.component';

describe('TechnicalunitComponent', () => {
  let component: TechnicalunitComponent;
  let fixture: ComponentFixture<TechnicalunitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalunitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
