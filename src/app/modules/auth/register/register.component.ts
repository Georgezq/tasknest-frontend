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
   emailExists: boolean = false;
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
          this.emailExists = exists;
          if(this.emailExists)
            this.messageService.showMesages('info', 'Correo ya existente', 'Por favor inicie sesión', 2000);
          this.loading = false;
        }, 1000);
        console.log(email);
        
        this.userRepository.sendEmailVerification(email).subscribe({
          next: () => alert('Correo de verificación enviado'),
          error: (err) => alert('Error al enviar el correo: ' + err.message)
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
