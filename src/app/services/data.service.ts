import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: {
    [key: string]: Cliente;
  } = {
    '1039454860': {
      tipoDocumento: 'Cédula de ciudadanía',
      nombre: 'Juan ',
      primerApellido: 'Pérez',
      direccion: 'Calle Falsa 123',
      telefono: '123456789',
    },
  };

  constructor() {}

  getData(numeroDocumento: string): Cliente | null {
    return this.data[numeroDocumento] || null;
  }
}
