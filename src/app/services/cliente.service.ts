import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'https://localhost:44397/api/Cliente';
  private clientesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {
    this.fetchClientes(); // Cargar clientes al inicializar el servicio
  }

  // Método para obtener la lista de clientes como observable
  getClientes(): Observable<any[]> {
    return this.clientesSubject.asObservable();
  }

  // Método para eliminar un cliente
  deleteCliente(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  // Método para cargar la lista de clientes
   fetchClientes() {
    this.http.get<any[]>('https://localhost:44397/api/Cliente/getALL').subscribe(
      clientes => {
        this.clientesSubject.next(clientes); // Actualizar el BehaviorSubject con la nueva lista de clientes
      },
      error => {
        console.error('Error al obtener clientes:', error);
      }
    );
  }
  agregarCliente(nuevoCliente: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, nuevoCliente);
  }
}
