import { UserRepository } from '@/app/core/repositories/user.repository';
import { MessageAlertService } from '@/app/shared/services/messageAlert.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-recover-account',
  standalone: false,
  templateUrl: './recover-account.component.html',
  providers: [MessageService, MessageAlertService]
})
export class RecoverAccountComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});
  validEmail: boolean = false;
  loading: boolean = false;

   constructor(private fb: FormBuilder, private userRepository: UserRepository, private messageService: MessageAlertService, private router: Router) {
          
     }

  ngOnInit(): void {
      this.formGroup = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
      })
  }

  isEmailValid() {
    const email = this.validEmail = this.formGroup.get('email')?.valid || false;
    console.log(email);
    
    return this.validEmail;
  }

  validIfEmailExists() {
     const email = this.formGroup.get('email')?.value;
      this.loading = false;
      this.loading = true;
      this.userRepository.thisEmailExists(email).subscribe({
        next: (exists) => {
          setTimeout(() => {
            if(exists)
              this.messageService.showMesages('info', 'Correo ya existente', 'Por favor inicie sesión', 2000);
            this.loading = false;
          }, 1000);
         
          this.router.navigate(['confirmation']);
         
        },
        error: () => {
          this.loading = false;
          this.messageService.showMesages('error', 'Ocurrió un error al verificar el correo', '', 2000);
        }
      });
    
  }

}
