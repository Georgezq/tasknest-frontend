import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverAccountComponent } from './recover-account/recover-account.component';

export const auth_routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },

    //REGISTRO

    { path: 'register', component: RegisterComponent },
    { path: 'register-verification', loadComponent: () => import('./register-verification/register-verification.component').then(m => m.RegisterVerificationComponent) },

    //RECUPERAR CONTRASEÑA
    { path: 'resetpassword', component: RecoverAccountComponent,
        children: [
           
        ]
     },

     {
        path: 'confirmation',
        loadComponent: () => import('./reset-confirmation/reset-confirmation.component').then(m => m.ResetConfirmationComponent)
    }
];
