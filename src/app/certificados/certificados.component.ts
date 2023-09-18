import { Component } from '@angular/core';
import { CertificadosService } from '../services/certificados.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css'],
})
export class CertificadosComponent {
  certificados: Array<any> = [];
  constructor(private certificadoService: CertificadosService) {}

  ngOnInit(): void {
    this.certificadoService.getCertificates().subscribe((data: any) => {
      this.certificados = data;
    });
  }
}
