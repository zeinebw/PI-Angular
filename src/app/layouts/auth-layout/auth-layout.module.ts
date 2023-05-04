import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { UpdateUserComponent } from 'src/app/update-user/update-user.component';
import { DeleteUserComponent } from 'src/app/delete-user/delete-user.component';
import { UserslistComponent } from 'src/app/userslist/userslist.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    UserslistComponent
  ]
})
export class AuthLayoutModule { }
