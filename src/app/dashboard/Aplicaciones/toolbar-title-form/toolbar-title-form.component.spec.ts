import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarTitleFormComponent } from './toolbar-title-form.component';

describe('ToolbarTitleFormComponent', () => {
  let component: ToolbarTitleFormComponent;
  let fixture: ComponentFixture<ToolbarTitleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarTitleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarTitleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
