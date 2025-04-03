import { Routes } from '@angular/router';

export const board_routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'board', loadComponent: () =>  
        import('./main-board/main-board.component').
        then(m => m.MainBoardComponent), 
        children: [
            { path: 'board-main', loadComponent: () => import('./boards/boards.component').then(
                m => m.BoardsComponent)
            },
            {
              path: 'calendar', loadComponent: () => import('./calendar-task/calendar-task.component').then(
                m => m.CalendarTaskComponent)
            }
        ] 
    } //despues poner la id (board/:id) para identificar este board del usuario
];
