import { Component } from '@angular/core';
import { BoardHeaderComponent } from '../components/board-header/board-header.component';
import { BoardSidebarComponent } from '../components/board-sidebar/board-sidebar.component';

@Component({
  selector: 'app-main-board',
  imports: [BoardHeaderComponent, BoardSidebarComponent],
  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.css'
})
export class MainBoardComponent {

}
