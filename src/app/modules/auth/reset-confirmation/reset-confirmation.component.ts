import { MessageAlertService } from '@/app/shared/services/messageAlert.service';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-reset-confirmation',
  imports: [
    DividerModule,
    PasswordModule,
    ReactiveFormsModule,
    ToastModule,
    ProgressSpinnerModule,
    RouterModule,
  ],
  template: `
  <p-toast />
    <section class="h-screen w-full flex">
      <div class="card-register h-8 m-auto h-auto w-24rem">
        <div class="card-header mt-4">
          <h5>Verifiquemos tu correo electrónico</h5>
        </div>
        <div class="card-body m-auto mt-4 text-center flex flex-column align-items-center w-full"> 
          <img src="assets/sendEmail.webp" alt="email-verification" class="w-12rem h-12rem" />
          
          <span>Hemos enviado un enlace de verificación a:</span>
          <strong> {{email}} </strong>

          <div class="content-buttons flex flex-column mt-4 gap-3 w-full" >
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" class="py-2 border-round-sm border-0 border-none bg-primary">Abrir correo electrónico</a>
          <button class="border-round-sm border-0 border-none bg-gray-100" >Reenviar enlace</button>
          </div>
        </div>

        <p-divider />

        <div class="card-footer flex align-items-center justify-content-center">
          <span> Creado por Georgezq </span>
        </div>
      </div>
    </section>
  `,
  styles: `
   button, a{
    font-size: 16px;
   }
  `,
  providers: [MessageAlertService, MessageService],
})
export class ResetConfirmationComponent {
  email: string = 'example@gmail.com';
}
