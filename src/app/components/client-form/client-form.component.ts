import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from 'src/app/models/clienteModel';
import { ClienteService } from 'src/app/services/cliente.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
// Función para generar un GUID único
function generarGUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
@Component({
  selector: 'clientForm',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {
  nuevoCliente: Cliente = {
    clienteId: generarGUID(),
    tiendaId: '77893cf8-b536-4532-ad40-ab3851e75627',
    nombre: '',
    apellidos: '',
    direccion: ''
  };
  mensajeSnackbar="";
  @Input() modalAbierto = new EventEmitter<boolean>();
  @Output() openCloseForm = new EventEmitter<boolean>();


  constructor(private clienteService: ClienteService,private snackbarService: SnackBarService) {}

  cerrarModal() {
    this.modalAbierto.emit(false)
    this.openCloseForm.emit(false)
    console.log(this.modalAbierto)
  }

  guardarCliente() {
    console.log(this.nuevoCliente); // Imprimir el objeto cliente en la consola

    this.clienteService.agregarCliente(this.nuevoCliente).subscribe(
      () => {
        // Cliente agregado exitosamente
        //this.snackbarService.mostrarMensaje('Cliente guardado exitosamente');
        this.openCloseForm.emit(false)
      },
      error => {
        console.error('Error al agregar cliente:', error);
        //TODO
      }
    );
  }
}
