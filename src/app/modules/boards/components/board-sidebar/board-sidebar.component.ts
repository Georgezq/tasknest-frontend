import { Component, OnInit } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-board-sidebar',
  imports: [DrawerModule, ButtonModule, MegaMenuModule, CommonModule, RouterModule],
  template: `
    <div class="layout-sidebar">
      <ul>
        <ng-container *ngFor="let item of model; let i = index">
            <div class="label-title"> {{ item.label }} </div>
            <ul *ngIf="item.items" class="my-3 ml-4">
              <li *ngFor="let subItem of item.items" class="list-items flex flex-row p-2" routerLinkActive="router-active">
                <a [routerLink]="subItem.routerLink" >
                  <i [ngClass]="subItem.icon" class="layout-menuitem-icon"></i>
                  {{ subItem.label }}
                </a>
              </li>
            </ul>
        </ng-container>
      </ul>
    </div>
  `,
  animations: [
    trigger('children', [
      state(
        'collapsed',
        style({
          height: '0',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
        })
      ),
      transition('collapsed <=> expanded', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ]),
  ],
})
export class BoardSidebarComponent implements OnInit{
  visible: boolean = false;

  model: MenuItem[] = [];

  ngOnInit(): void {
    this.model = [
      {
        label: 'Inicio',
        icon: 'pi pi-tablet',
        items: [
          {
            label: 'Tableros',
            icon: 'pi pi-tablet',
            routerLink: ['board-main'],
          },
          {
            label: 'Miembros',
            icon: 'pi pi-users'
          }
        ],
      },
      {
        label: 'Vistas del Espacio de trabajo',
        items: [
          {
            label: 'Tabla',
            icon: 'pi pi-table',

          },
          {
            label: 'Calendar',
            icon: 'pi pi-calendar-times',
            routerLink: ['calendar']
          }
        ]
      },
      {
        label: 'Sus tableros',
        items: [
          {
            label: 'tablero1'
          }
        ]
      }
    ];
  }
}
