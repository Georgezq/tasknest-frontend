import { Routes } from '@angular/router';

export const board_routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'board', loadComponent: () => import('./main-board/main-board.component').then(m => m.MainBoardComponent) } //despues poner la id (board/:id) para identificar este board del usuario
];
