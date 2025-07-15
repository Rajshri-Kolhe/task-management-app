import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-new-tasks',
  templateUrl: './add-new-tasks.component.html',
  styleUrls: ['./add-new-tasks.component.css']
})
export class AddNewTasksComponent {

  taskForm!:FormGroup;
constructor(private fb:FormBuilder, private taskService:TasksService, 
  private messageService:MessageService,private router:Router
){
  this.taskForm = this.fb.group({
    title:['',Validators.required],
    description:[''],
    due_date:['',Validators.required],
    priority:['',Validators.required],
    status:['',Validators.required],
    assigned_by:['']
  }); 
}
onTasksSubmit(){
  if(this.taskForm.valid){
    this.taskService.createNewTasks(this.taskForm.value).subscribe((res)=>{
      this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res.message || 'New Task added Successfully',
        });
          setTimeout(()=>{
           this.taskForm.reset();
          this.router.navigate(['/tasks'])
        },1000)
        
     
      
    })
  }
}
}
