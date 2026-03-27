import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar-component/navbar-component';

import { TaskDetailComponent } from './Components/task-detail-component/task-detail-component';
import { TaskEditComponent } from './Components/task-edit-component/task-edit-component';
import { TaskAddComponent } from './Components/task-add-component/task-add-component';
import { TaskInfoComponent } from './Components/task-info-component/task-info-component';
import { TaskListComponent } from './Components/task-list-component/task-list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, TaskDetailComponent, TaskEditComponent, TaskAddComponent, TaskInfoComponent, TaskListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TaskFlow');
}
