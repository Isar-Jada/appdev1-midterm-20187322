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
  newTask: taskModel = {title: ':))', description: 'weeeeeeeee', dueDate: '1029448', status: 'Pending', priorityLevel: 'Low'};

  onEdit(){
    this.visible = true;
  }

  onConfirm(){
    this.visible=false;
  }
}
