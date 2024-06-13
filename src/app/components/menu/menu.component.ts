import { Component } from '@angular/core';
import path from 'path';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  rutas =[
    {
      name:'Home',
      path: '/home'
    },
    {
      name:'About',
      path:'/about'
    },
    {
      name:'Contact',
      path: '/contact'
      
    }
  ];
}
