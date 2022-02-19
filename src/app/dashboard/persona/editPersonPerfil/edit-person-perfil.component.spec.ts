import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonPerfilComponent } from './edit-person-perfil.component';

describe('EditPersonPerfilComponent', () => {
  let component: EditPersonPerfilComponent;
  let fixture: ComponentFixture<EditPersonPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPersonPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
