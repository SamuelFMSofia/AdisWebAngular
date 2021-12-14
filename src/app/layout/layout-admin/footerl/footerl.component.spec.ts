import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterlComponent } from './footerl.component';

describe('FooterlComponent', () => {
  let component: FooterlComponent;
  let fixture: ComponentFixture<FooterlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
