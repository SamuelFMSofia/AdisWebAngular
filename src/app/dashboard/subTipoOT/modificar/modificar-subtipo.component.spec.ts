import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSubtipoComponent } from './modificar-subtipo.component';

describe('ModificarSubtipoComponent', () => {
  let component: ModificarSubtipoComponent;
  let fixture: ComponentFixture<ModificarSubtipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarSubtipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarSubtipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
