import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});
  emailExists: boolean = false;
  textButton: string = 'Continuar';

  constructor(private fb: FormBuilder) {
    if (this.emailExists) 
          this.textButton = 'Iniciar Sesión';
    else  this.textButton = 'Continuar';
    
  }

  

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: [''],
      password: ['']
    });
  }
}
