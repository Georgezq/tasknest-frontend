import { UserRepository } from '@/app/core/repositories/user.repository';
import { MessageAlertService } from '@/app/shared/services/messageAlert.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  providers: [MessageService, MessageAlertService]
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});
  emailExists: boolean = false;
  textButton: string = 'Continuar';
  loading: boolean = false;
  
  constructor(private fb: FormBuilder, private userRepository: UserRepository, private messageService: MessageAlertService) {
       
  }
  

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: [''],
      password: ['']
    });

    // this.userRepository.getAllUsers().subscribe(data => {
    //   this.users = data;
    //   console.log(this.users);
      
    // })
  
  }

  verifyEmail() {
    this.loading = false;
    const email = this.formGroup.get('email')?.value;
    this.loading = true;
    this.userRepository.thisEmailExists(email).subscribe({
      next: (exists) => {
        setTimeout(() => {
          this.emailExists = exists;
          this.loading = false;
          if (this.emailExists) this.textButton = 'Iniciar Sesión';
          else this.textButton = 'Continuar';
        }, 1000);
      },
      error: () => {       
        this.loading = false;
        this.messageService.showMesages('error', 'Ocurrió un error al verificar el correo', '', 2000);
      }
    });
  }

}
