import { Routes } from '@angular/router';
import { auth_routes } from './modules/auth/auth.routing.module';
import { board_routes } from './modules/boards/boards.routing.module';

export const routes: Routes = [
    ...auth_routes,
    ...board_routes,
];
