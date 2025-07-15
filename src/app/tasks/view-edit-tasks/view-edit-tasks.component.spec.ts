import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditTasksComponent } from './view-edit-tasks.component';

describe('ViewEditTasksComponent', () => {
  let component: ViewEditTasksComponent;
  let fixture: ComponentFixture<ViewEditTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEditTasksComponent]
    });
    fixture = TestBed.createComponent(ViewEditTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
