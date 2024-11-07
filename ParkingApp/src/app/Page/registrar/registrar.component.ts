import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  usuario: string = '';
  correo: string = '';
  clave: string = '';
  confirmarClave: string = '';
  attemptedRegister: boolean = false;

  constructor(private router: Router) {}

  // Función de registro
  registrar() {
    this.attemptedRegister = true;

    // Validación de campos
    if (this.usuario && this.correo && this.clave && this.clave === this.confirmarClave) {

      // Redirigir o mostrar mensaje de éxito si la validación pasa
      alert('Registro exitoso');
      this.router.navigate(['/login']);
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }

  // Función para volver al login
  volver() {
    this.router.navigate(['/login']);
  }
}
