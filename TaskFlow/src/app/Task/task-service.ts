import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  newTask: taskModel[]=[
    {taskId: 1,title: 'one', description: 'one', dueDate: 'one', status: 'one', priorityLevel: 'one'},
    {taskId: 2,title: 'one', description: 'one', dueDate: 'one', status: 'one', priorityLevel: 'one'}
  ]
  
  getTasks(){
    return this.newTask;
  }
}