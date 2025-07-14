import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTasksComponent } from './add-new-tasks.component';

describe('AddNewTasksComponent', () => {
  let component: AddNewTasksComponent;
  let fixture: ComponentFixture<AddNewTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewTasksComponent]
    });
    fixture = TestBed.createComponent(AddNewTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
