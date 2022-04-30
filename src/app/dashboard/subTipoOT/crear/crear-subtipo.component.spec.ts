import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSubtipoComponent } from './crear-subtipo.component';

describe('CrearSubtipoComponent', () => {
  let component: CrearSubtipoComponent;
  let fixture: ComponentFixture<CrearSubtipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSubtipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSubtipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
