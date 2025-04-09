import { UserRepository } from '@/app/core/repositories/user.repository';
import { MessageAlertService } from '@/app/shared/services/messageAlert.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-register-verification',
  imports: [ToastModule, ReactiveFormsModule, PasswordModule, ProgressSpinnerModule, RouterModule, DividerModule, InputTextModule ],
  template: `
    <p-toast />
<section class="h-screen w-full flex">
  <div class="card-register h-8 m-auto h-auto w-24rem">
    <div class="card-header mt-4">
      <h5>Dirección de correo electrónico verificada</h5>
    </div>
    <div class="card-body m-auto mt-4">
      <form [formGroup]="formGroup" class="flex flex-column gap-3 w-full" (ngSubmit)="register()">
        
      <label for="email">Dirección de correo electrónico</label>
      <input type="text" name="email" id="email" class="text-form-completed" formControlName="email" value="text@gmail.com">
        
        
      <label for="name">Nombre</label>
        <input
          type="name"
          pInputText
          formControlName="name"
          placeholder="Introduce tu Nombre"
        />

    
        <label for="password">Contraseña</label>
        <p-password
          formControlName="password"
          [feedback]="false"
          [toggleMask]="true"
          styleClass="w-full"
          placeholder="Crear contraseña"
          [inputStyle]="{ width: '100%' }"

        />
      
        <button class=" border-round-sm border-0 border-none bg-primary">
         @if (!loading) {
          Continuar
         } @else {
          <p-progress-spinner strokeWidth="4" styleClass="geek-spinner"  fill="transparent" [style]="{ width: '25px', height: '25px', color: 'white' }" />
         }
        </button>



      </form>

    </div>

    <p-divider />

    <div class="card-footer flex align-items-center justify-content-center">
        <span>
            Creado por Georgezq
        </span>
    </div>
  </div>
</section>

  `,
  
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService, MessageAlertService]
})
export class RegisterVerificationComponent implements OnInit{ 
  formGroup: FormGroup = new FormGroup({});
  emailParams: string | null = 'test@example.com' ;

  loading: boolean = false;

  constructor(private fb: FormBuilder, private router: ActivatedRoute, private userRepository: UserRepository){}

  ngOnInit(): void {
    this.router.queryParamMap.subscribe(params => {
      this.emailParams = params.get('email');
    });
    
    this.formGroup = this.fb.group({
        email: [this.emailParams, Validators.required],
        name: [''],
        password: ['']
      })
  }

  register(){

    this.userRepository.createUser(this.formGroup.value).subscribe({
      next: () => {
        console.log('creado');
      },
      error: (error) => {
        console.error(error);
      }
    })
  }


}
