import { Component } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrl: './certificaciones.component.css'
})
export class CertificacionesComponent {
  nombreCertificado: string = '';
  fechaObtencion: string = '';
  vencimientoChecked: boolean = false;
  fechaVencimiento: string = '';
}