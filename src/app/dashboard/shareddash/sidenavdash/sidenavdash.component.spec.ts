import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavdashComponent } from './sidenavdash.component';

describe('SidenavdashComponent', () => {
  let component: SidenavdashComponent;
  let fixture: ComponentFixture<SidenavdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
