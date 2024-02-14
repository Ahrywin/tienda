import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {
  @Output() showUserTable = new EventEmitter<string>();
  @Output() showUserTienda = new EventEmitter<string>();
  @Output() showUserArticulos = new EventEmitter<string>();

  showUsers() {
    this.showUserTable.emit("users");
  }
  showTiendas()
  {
    this.showUserTienda.emit("tienda");

  }
  showArti()
  {
    this.showUserArticulos.emit("articulos")
  }



}
