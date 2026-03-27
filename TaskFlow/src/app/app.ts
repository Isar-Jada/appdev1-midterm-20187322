import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar-component/navbar-component';

import { TaskDetailComponent } from './Components/task-detail-component/task-detail-component';
import { TaskEditComponent } from './Components/task-edit-component/task-edit-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, TaskDetailComponent, TaskEditComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TaskFlow');
}
