import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUOComponent } from './list-uo.component';

describe('ListUOComponent', () => {
  let component: ListUOComponent;
  let fixture: ComponentFixture<ListUOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
