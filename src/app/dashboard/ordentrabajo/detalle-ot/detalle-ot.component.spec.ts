import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOTComponent } from './detalle-ot.component';

describe('DetalleOTComponent', () => {
  let component: DetalleOTComponent;
  let fixture: ComponentFixture<DetalleOTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleOTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleOTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
