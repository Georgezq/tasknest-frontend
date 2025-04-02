import { Component } from '@angular/core';
import { BoardHeaderComponent } from '../components/board-header/board-header.component';

@Component({
  selector: 'app-main-board',
  imports: [BoardHeaderComponent],
  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.css'
})
export class MainBoardComponent {

}
