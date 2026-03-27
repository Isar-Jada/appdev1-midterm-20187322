import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../Task/task-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-add-component',
  imports: [FormsModule],
  templateUrl: './task-add-component.html',
  styleUrl: './task-add-component.css',
})
export class TaskAddComponent {
  clicked: boolean = false;
  confirmed: boolean = false;
  newTask: taskModel = {taskId: 1,title: '', description: '', dueDate: '', status: '', priorityLevel: ''};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}
  
  onClick(){
    this.clicked = true;
  }

  onConfirm(){
    this.confirmed = true;
  }

  onSubmit(){
    alert("Task Added!");
  }

  
}