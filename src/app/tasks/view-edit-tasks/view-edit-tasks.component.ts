import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Task, TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-view-edit-tasks',
  templateUrl: './view-edit-tasks.component.html',
  styleUrls: ['./view-edit-tasks.component.css']
})
export class ViewEditTasksComponent {
  //   @Input() task!: Task | null;
  // @Output() save = new EventEmitter<Task>();
  // @Output() cancel = new EventEmitter<void>();
  taskId!: number;
  editForm!: FormGroup;
constructor(private fb:FormBuilder, private router:Router, private tasks:TasksService,
  private route: ActivatedRoute,private messageService:MessageService){
 this.editForm = this.fb.group({
      title: ['', Validators.required],
      assigned_by: ['', Validators.required],
      description: [''],
      priority: ['', Validators.required],
      status: ['', Validators.required],
      due_date: ['', Validators.required]
    });
}

ngOnInit(): void {
  this.taskId = Number(this.route.snapshot.paramMap.get('id')); // 🔹 Step 1: Get task ID from URL
  this.tasks.getTaskByid(this.taskId).subscribe(task => {
    this.editForm.patchValue(task); // 🔹 Step 2: Fill the form with existing task data
  });
}


  onSubmit(): void {
    if (this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return;
    }
    const updatedTask: Task = this.editForm.value ;
    this.tasks.updateTasks(this.taskId,updatedTask).subscribe((res)=>{
      this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res.message || 'New Task added Successfully',
        });
        setTimeout(()=>{
          this.editForm.reset();
      this.router.navigate(['/tasks'])
        },1000)
    })
  }
  onCancel(): void {
    this.router.navigate(['/tasks'])
  }
}
