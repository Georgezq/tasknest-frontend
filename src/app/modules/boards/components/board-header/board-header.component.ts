import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-board-header',
  imports: [Menubar, BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule, IconFieldModule, InputIconModule],
  templateUrl: './board-header.component.html',
})
export class BoardHeaderComponent implements OnInit{

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Espacios de trabajo',
            icon: 'pi pi-home',
            items: [
              {
                label: 'Mis espacios de trabajo',
              }
            ]
        },
        {
            label: 'Marcado',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Core',
                    icon: 'pi pi-bolt',
                    shortcut: '⌘+S',
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server',
                    shortcut: '⌘+B',
                },
                {
                    separator: true,
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil',
                    shortcut: '⌘+U',
                },
            ],
        },
    ];
}


}
