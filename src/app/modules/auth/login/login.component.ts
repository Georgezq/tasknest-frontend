import { UserRepository } from '@/app/core/repositories/user.repository';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});
  emailExists: boolean = false;
  textButton: string = 'Continuar';
  users: any;
  constructor(private fb: FormBuilder, private userRepository: UserRepository) {
       
  }
  

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: [''],
      password: ['']
    });

    this.userRepository.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
      
    })
  
  }

  verifyEmail() {
    const email = this.formGroup.get('email')?.value;
    this.userRepository.thisEmailExists(email).subscribe((exists) => {
      this.emailExists = exists;
      if (this.emailExists) {
        this.textButton = 'Iniciar Sesión';
      } else {
        this.textButton = 'Continuar';
      }
    });
  }

 


}
