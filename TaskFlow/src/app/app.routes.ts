import { Routes } from '@angular/router';
import { TaskDetailComponent } from './Components/task-detail-component/task-detail-component';
import { TaskEditComponent } from './Components/task-edit-component/task-edit-component';

export const routes: Routes = [
    {path: 'tasks', component: TaskDetailComponent},
    {path: 'edit', component: TaskEditComponent}
];
