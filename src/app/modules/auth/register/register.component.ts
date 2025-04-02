import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  formGroup: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
      this.formGroup = this.fb.group({
        email: ['']
      })
  }

}
