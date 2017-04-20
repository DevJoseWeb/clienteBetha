import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { UsersComponent } from './users.component';
import { UsersService } from 'app/services/users.service';
import { UserFormComponent } from './user-form/user-form.component';
import { UserFormEditComponent } from './user-form/user-form-edit.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpModule],
  declarations: [
    UsersComponent,
    UserFormComponent,
    UserFormEditComponent
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
