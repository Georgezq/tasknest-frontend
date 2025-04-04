//Elementos de Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Componentes de Angular
import { LoginComponent } from './login/login.component';

//Componentes de PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RouterLink } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RecoverAccountComponent } from './recover-account/recover-account.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { Ripple } from 'primeng/ripple';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, RecoverAccountComponent],
  exports: [LoginComponent, RegisterComponent, RecoverAccountComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DividerModule,
    ProgressSpinnerModule,
    ToastModule,
    Ripple,
    MessageModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule { }
