import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidatecnicaComponent } from './unidatecnica.component';

describe('UnidatecnicaComponent', () => {
  let component: UnidatecnicaComponent;
  let fixture: ComponentFixture<UnidatecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidatecnicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidatecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
