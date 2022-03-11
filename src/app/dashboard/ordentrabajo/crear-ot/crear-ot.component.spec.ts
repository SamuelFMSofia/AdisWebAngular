import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOTComponent } from './crear-ot.component';

describe('CrearOTComponent', () => {
  let component: CrearOTComponent;
  let fixture: ComponentFixture<CrearOTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearOTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearOTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
