import { Routes } from '@angular/router';
import { TaskDetailComponent } from './Components/task-detail-component/task-detail-component';
import { TaskEditComponent } from './Components/task-edit-component/task-edit-component';
import { TaskAddComponent } from './Components/task-add-component/task-add-component';
import { TaskInfoComponent } from './Components/task-info-component/task-info-component';
import { TaskListComponent } from './Components/task-list-component/task-list-component';

export const routes: Routes = [
    {path: 'tasks', component: TaskDetailComponent},
    {path: 'edit', component: TaskEditComponent},
    {path: 'add', component: TaskAddComponent},
    {path: 'info', component: TaskInfoComponent},
    {path: 'list', component: TaskListComponent}
];
