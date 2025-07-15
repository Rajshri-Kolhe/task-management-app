import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddNewTasksComponent } from './add-new-tasks/add-new-tasks.component';
import { ViewEditTasksComponent } from './view-edit-tasks/view-edit-tasks.component';

const routes: Routes = [
  {
    path:'',component:TaskListComponent
  },
  {path:'add-newTasks',component:AddNewTasksComponent},
  {path:'edit/:id',component:ViewEditTasksComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
