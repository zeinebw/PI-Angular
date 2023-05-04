import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { UpdateUserComponent } from 'src/app/update-user/update-user.component';
import { DeleteUserComponent } from 'src/app/delete-user/delete-user.component';
import { UserslistComponent } from 'src/app/userslist/userslist.component';
import { AuthGuard } from 'src/app/Security/auth-guard';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent ,canActivate:[AuthGuard] },
    {path:'updateuser/:id',component: UpdateUserComponent},
    {path:'deleteuser/:id',component: DeleteUserComponent},
    {path :'userslist', component : UserslistComponent}


];
