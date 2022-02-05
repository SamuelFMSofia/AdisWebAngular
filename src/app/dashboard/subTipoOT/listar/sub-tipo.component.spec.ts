import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTipoComponent } from './sub-tipo.component';

describe('SubTipoComponent', () => {
  let component: SubTipoComponent;
  let fixture: ComponentFixture<SubTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
