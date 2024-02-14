import { Component, EventEmitter, Output } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  activeTable = true;
  activateTienda = false;
  activateArticulos = false;
  clientForm?:boolean;

  nuevoCliente: any = {}; // Objeto para almacenar los datos del nuevo cliente

  toggleComponent(component: string) {
    this.activeTable = component === 'users';
    this.activateTienda = component === 'tienda';
    this.activateArticulos = component === 'articulos';
  }


  constructor() {}


  abrirModal() {
    this.clientForm = true;
  }






}
