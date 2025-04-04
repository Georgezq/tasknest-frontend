import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
// import Aura from '@primeng/themes/aura';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UserRepository } from './core/repositories/user.repository';
import { UserRepositoryImpl } from './infraestructure/repositories/user.repository.impl';
import { MyPreset } from './myPreset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({
    theme: { preset: MyPreset,
      options: {
        darkModeSelector: '.my-app-dark',
      }
     },
    }),

    { provide: UserRepository, useClass: UserRepositoryImpl },

  ],
};