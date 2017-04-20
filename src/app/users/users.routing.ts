import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserFormEditComponent } from './user-form/user-form-edit.component';

const usersRoutes: Routes = [
  { path: 'users', component: UsersComponent, pathMatch: 'full' },
  { path: 'users/new', component: UserFormComponent},
  { path: 'users/:id', component: UserFormEditComponent},
 // { path: 'users/:id', component: UserFormComponent}
];

export const usersRouting = RouterModule.forChild(usersRoutes);
