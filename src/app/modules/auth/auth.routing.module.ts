import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const auth_routes: Routes = [
    // { path: 'login', loadChildren: () => import('./login').then(m => m.AuthModule) },
    { path: 'login', component: LoginComponent }
];
