import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MessageAlertService } from '@/app/shared/services/messageAlert.service';
import { UserRepository } from '@/app/core/repositories/user.repository';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  providers: [MessageService, MessageAlertService]
})
export class RegisterComponent implements OnInit{

  formGroup: FormGroup = new FormGroup({});
  loading: boolean = false;
   
   constructor(private fb: FormBuilder, private userRepository: UserRepository, private messageService: MessageAlertService) {
        
   }

  ngOnInit(): void {
      this.formGroup = this.fb.group({
        email: ['']
      })
  }

  verifyEmail() {
    this.loading = false;
    const email = this.formGroup.get('email')?.value;
    this.loading = true;
    this.userRepository.thisEmailExists(email).subscribe({
      next: (exists) => {
        setTimeout(() => {
          if(exists)
            this.messageService.showMesages('info', 'Correo ya existente', 'Por favor inicie sesión', 2000);
          this.loading = false;
        }, 1000);
        
        this.userRepository.sendEmailVerification(email).subscribe({
         next: () => {
          this.loading = false;
          this.messageService.showMesages('success', 'Correo enviado', 'Por favor revise su correo para continuar con el registro', 2000);
         },
          error: () => {
            this.loading = false;
            this.messageService.showMesages('error', 'Ocurrió un error al enviar el correo', '', 2000);
          }
        });
      },
      error: () => {
        this.loading = false;
        this.messageService.showMesages('error', 'Ocurrió un error al verificar el correo', '', 2000);
      }
    });
  }

  registerAccount(){
  }

}
