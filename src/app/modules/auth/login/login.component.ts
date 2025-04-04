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

  buttonConfig() {
    if(this.textButton === 'Continuar') this.emailValid();
    else this.login();    
  }

  emailValid() {
    this.loading = false;
    const email = this.formGroup.get('email')?.value;
    this.loading = true;
    this.userRepository.thisEmailExists(email).subscribe({
      next: (exists) => {
        setTimeout(() => {
          this.emailExists = exists;
          this.loading = false;
          if (this.emailExists) this.textButton = 'Iniciar Sesión';  
          else {
            this.textButton = 'Continuar';
                this.messageService.showMesages('info', 'Correo no existente', 'Por favor registrese', 2000);
          }
        }, 1000);
      },
      error: () => {       
        this.loading = false;
        this.messageService.showMesages('error', 'Ocurrió un error al verificar el correo', '', 2000);
      }
    });
  }



  login() {
    const email = this.formGroup.get('email')?.value;
    const password = this.formGroup.get('password')?.value;
    this.loading = false;
    this.loading = true;
    this.userRepository.authenticate(email, password).subscribe({
      next: () => {
        setTimeout(() => {
          // console.log(response);
          this.loading = false;
        }, 1000);
      },
      error: () => {        
        this.loading = false;
        this.messageService.showMesages('error', 'Ocurrió un error al iniciar sesión', '', 2000);
      }
    });
  }



}
