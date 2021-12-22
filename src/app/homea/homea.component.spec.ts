import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeaComponent } from './homea.component';

describe('HomeaComponent', () => {
  let component: HomeaComponent;
  let fixture: ComponentFixture<HomeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
