import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent {
  correo: string = '';

  constructor(private router: Router) {}

  enviar() {
    if (this.correo) {
      alert('Correo enviado correctamente');
    } else {
      alert('Por favor, ingrese su correo electrónico.');
    }
  }

  volver() {
    this.router.navigate(['/login']);
  }
}
