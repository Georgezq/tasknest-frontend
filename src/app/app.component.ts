import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tasknest-frontend';


}
