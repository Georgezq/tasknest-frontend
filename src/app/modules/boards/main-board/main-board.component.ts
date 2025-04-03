import { Component, OnInit } from '@angular/core';
import { BoardHeaderComponent } from '../components/board-header/board-header.component';
import { BoardSidebarComponent } from '../components/board-sidebar/board-sidebar.component';
import { RouterModule } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-main-board',
  imports: [BoardHeaderComponent, BoardSidebarComponent, RouterModule, ProgressSpinnerModule],
  templateUrl: './main-board.component.html',
})
export class MainBoardComponent implements OnInit {

  _loading: any = false;

  ngOnInit(): void {
      //SOLO ESTARA PARA SIMULAR XD LUEGO PONDRE UNA CARGA REAL POR LOS PROYECTOS
      this.loading();
  }
  
  loading(){
    this._loading = false;
    setTimeout(() => {
      this._loading = true
    }, 100);
  }

}
