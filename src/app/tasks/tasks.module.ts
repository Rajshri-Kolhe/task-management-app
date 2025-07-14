import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { AddNewTasksComponent } from './add-new-tasks/add-new-tasks.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ViewEditTasksComponent } from './view-edit-tasks/view-edit-tasks.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    TaskListComponent,
    AddNewTasksComponent,
    ViewEditTasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    ToastModule
  ]
})
export class TasksModule { }
