import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOTComponent } from './listar-ot.component';

describe('ListarOTComponent', () => {
  let component: ListarOTComponent;
  let fixture: ComponentFixture<ListarOTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarOTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
