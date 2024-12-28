import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Cliente } from '../../models/cliente';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'form-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css'],
})
export class FormSearchComponent {
  tipoDocumento: string = '';
  numeroDocumento: string = '';
  isButtonActive: boolean = false;

  constructor(private router: Router, private dataService: DataService) {}

  onInputChange() {
    this.isButtonActive =
      this.tipoDocumento !== '' &&
      this.numeroDocumento.length >= 8 &&
      this.numeroDocumento.length <= 11;
  }

  buscar() {
    if (this.isButtonActive) {
      const cliente = this.dataService.getData(this.numeroDocumento);
      if (cliente) {
        this.router.navigate(['/resumen', this.numeroDocumento]);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Documento no encontrado.',
        });
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, complete todos los campos requeridos correctamente.',
      });
    }
  }
}
