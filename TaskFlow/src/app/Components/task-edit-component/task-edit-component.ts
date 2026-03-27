import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-edit-component',
  imports: [FormsModule],
  templateUrl: './task-edit-component.html',
  styleUrl: './task-edit-component.css',
})
export class TaskEditComponent {
  visible: boolean = false
  newTask: taskModel = {taskId: 1, title: 'Maam', description: 'I tried', dueDate: 'TvT', status: 'Pending', priorityLevel: 'Low'};
  deleted: boolean = false;

  onEdit(){
    this.visible = true;
  }

  onConfirm(){
    this.visible=false;
  }

  onDelete(){
    if(confirm("Are you sure?")){
      alert("Task Deleted!");
      this.deleted=true;
    }
  }
}