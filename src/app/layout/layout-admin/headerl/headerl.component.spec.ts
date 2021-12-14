import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderlComponent } from './headerl.component';

describe('HeaderlComponent', () => {
  let component: HeaderlComponent;
  let fixture: ComponentFixture<HeaderlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
