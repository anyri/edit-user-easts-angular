import { Routes } from '@angular/router';
import { UsersListComponent } from './users/users-list/users-list.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'users', 
        component: UsersListComponent
    },
    {
        path: 'user/:id', 
        component: EditUserComponent
    },
    {
        path: 'error/:type',
        component: ErrorPageComponent
    }
]