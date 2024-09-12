
import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: string = '';
  clave: string = '';
  attemptedLogin: boolean = false;

  constructor(private router: Router) { }

  // Función para validar los campos y realizar el inicio de sesión
  login() {
    this.attemptedLogin = true;

  // Si los campos son válidos (usuario y clave correctos), navegar a home
  if (this.usuario && this.clave.length >= 6) {
    const navigationExtras: NavigationExtras = {
      state: {
        usuariologin: this.usuario //envia el usuario del input de usuario a la pagina Home
      }
    };
  
    this.router.navigate(['/home']); // Redirecciona a la página Home
  }
  }
}
