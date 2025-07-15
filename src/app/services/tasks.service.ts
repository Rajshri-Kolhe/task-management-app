import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Task{
  id?:number;
  title:string;
  description:string;
  due_date:string;
  priority:string;
  status:string;
  assigned_by:string;
}
@Injectable({
  providedIn: 'root'
})

export class TasksService {

private taskApiurl = 'http://localhost:3000/tasks';

  constructor(private http:HttpClient) { }

  getAllTasks():Observable<Task[]>{
  return this.http.get<Task[]>(this.taskApiurl);
  }

  getTaskByid(id:number):Observable<Task>{
    return this.http.get<Task>(`${this.taskApiurl}/${id}`);
  }

  createNewTasks(task:Task):Observable<any>{
    return this.http.post(this.taskApiurl,task)
  }

  updateTasks(id:number,task:Task):Observable<any>{
    return this.http.put(`${this.taskApiurl}/${id}`,task);
  }

  deleteTasks(id:number):Observable<any>{
    return this.http.delete(`${this.taskApiurl}/${id}`)
  }
}
