import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavaComponent } from './sidenava.component';

describe('SidenavaComponent', () => {
  let component: SidenavaComponent;
  let fixture: ComponentFixture<SidenavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
