import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit{
  clientes: any[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      clientes => {
        this.clientes = clientes; // Actualizar la lista de clientes cuando haya cambios
      },
      error => {
        console.error('Error al obtener clientes:', error);
      }
    );
  }

  eliminarCliente(id: string) {
    this.clienteService.deleteCliente(id).subscribe(
      () => {
        this.clienteService.fetchClientes(); // Volver a cargar la lista de clientes después de la eliminación
      },
      error => {
        console.error('Error al eliminar cliente:', error);
      }
    );
  }
}
