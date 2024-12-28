import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'resumen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css',
})
export class ResumenComponent implements OnInit {
  cliente: Cliente | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    const numeroDocumento = this.route.snapshot.paramMap.get('numeroDocumento');
    if (numeroDocumento) {
      this.cliente = this.dataService.getData(numeroDocumento);
    }
  }
  volver() {
    this.router.navigate(['/']);
  }
}
