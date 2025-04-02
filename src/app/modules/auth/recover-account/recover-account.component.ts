import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recover-account',
  standalone: false,
  templateUrl: './recover-account.component.html',
})
export class RecoverAccountComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
      this.formGroup = this.fb.group({
        email: ['']
      })
  }

}
