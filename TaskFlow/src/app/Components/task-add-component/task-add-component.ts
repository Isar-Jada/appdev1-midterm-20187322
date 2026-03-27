import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-add-component',
  imports: [FormsModule],
  templateUrl: './task-add-component.html',
  styleUrl: './task-add-component.css',
})
export class TaskAddComponent {
  clicked: boolean = false;
  taskNum: number = 0;
  newTask: taskModel = {title: '', description: '', dueDate: '', status: '', priorityLevel: ''};

  onClick(){
    this.clicked = true;
  }

  onConfirm(){
    
  }
}