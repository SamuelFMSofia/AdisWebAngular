import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoOTComponent } from './tipo-ot.component';

describe('TipoOTComponent', () => {
  let component: TipoOTComponent;
  let fixture: ComponentFixture<TipoOTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoOTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoOTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
