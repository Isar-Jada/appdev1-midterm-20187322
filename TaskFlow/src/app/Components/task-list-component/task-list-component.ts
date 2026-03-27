import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../Task/task-service';

@Component({
  selector: 'app-task-list-component',
  imports: [FormsModule],
  templateUrl: './task-list-component.html',
  styleUrl: './task-list-component.css',
})
export class TaskListComponent {
  newTask: taskModel = {taskId: 1, title: ':))', description: 'weeeeeeeee', dueDate: '1029448', status: 'Pending', priorityLevel: 'Low'};

  
  onView(){

  }
}
