import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifypersonComponent } from './modifyperson.component';

describe('ModifypersonComponent', () => {
  let component: ModifypersonComponent;
  let fixture: ComponentFixture<ModifypersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifypersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifypersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
