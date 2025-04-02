import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';

@Component({
  selector: 'app-board-sidebar',
  imports: [DrawerModule, ButtonModule, MegaMenuModule],
  template: `
    <div class="layout-sidebar">
      
    </div>
  `,
})
export class BoardSidebarComponent {
  visible: boolean = false;

}
