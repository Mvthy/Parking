
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) { }

  ingresar() {
    // Lógica de autenticación (puedes agregar la verificación de usuario aquí)
    this.router.navigate(['/home']); // Redirecciona a la página Home
  }

}

export class InputOverviewExample {}