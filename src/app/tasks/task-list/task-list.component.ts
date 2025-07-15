import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Task, TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
tasks : Task[] =[];
  editingTask: Task | null = null;


constructor(private taskApi:TasksService, private router:Router,private messageService:MessageService){}
ngOnInit(){
  this.loadTaskList();
}
loadTaskList(){
  this.taskApi.getAllTasks().subscribe({
    next:(data)=>this.tasks = data,
    error:(err)=>(err)
  })
}
 getPriorityText(priority: string): string {
    switch(priority) {
      case '1': return 'Low';
      case '2': return 'Medium';
      case '3': return 'High';
      default: return priority;
    }
  }
  onEdit(task: Task): void {
     this.router.navigate(['/tasks/edit', task.id]);
    this.editingTask = { ...task }; // clone task to edit
  }
  onDelete(id?: number): void {
    if (!id) return;
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskApi.deleteTasks(id).subscribe({
        next: (res) => {

            this.messageService.add({
          severity: 'error',
          summary: 'Delete',
          detail: res.message || 'Task deleted Successfully',
        })

          this.loadTaskList();
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }
  
  onSave(updatedTask: Task): void {
    if (!updatedTask.id) return;
    this.taskApi.updateTasks(updatedTask.id, updatedTask).subscribe({
      next: () => {
        alert('Task updated successfully');
        this.editingTask = null;
        this.loadTaskList();
      },
      error: (err) => {
        alert('Failed to update task');
        console.error(err);
      }
    });
  }

  onCancelEdit(): void {
    this.editingTask = null;
  }
}
