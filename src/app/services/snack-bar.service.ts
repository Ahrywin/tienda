import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  private snackbarSubject = new Subject<string>();
  snackbarState = this.snackbarSubject.asObservable();

  constructor() { }

  mostrarMensaje(message: string) {
    this.snackbarSubject.next(message);
  }
}
