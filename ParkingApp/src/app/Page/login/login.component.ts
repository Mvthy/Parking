
import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

//Importar Auth
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  usuario: string = ''; // La variable de usuario
  clave: string = ''; // La variable de password
  tipoUsuario: string = ''; // Tipo de usuario seleccionado
  mostrarSelector: boolean = true; // Variable para mostrar/ocultar el selector de tipo de usuario
  errors: string[] = []; // Array para almacenar mensajes de error
  
  constructor(private router: Router, private authService: AuthService) {} //Inicializar servicio auth
 
  // Llama al método de autenticación con correo y contraseña
 async login() {
  if (this.usuario && this.clave) {
    const isAuthenticated = await this.authService.signIn(this.usuario, this.clave);
    
    // Solo navegamos si la autenticación fue exitosa
    if (isAuthenticated) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
          user: this.usuario, // Envío dato del input Usuario
        },
      };
      this.router.navigate(['/home'], navigationExtras); // Navega a Home y envía el dato del input Usuario
    }
  } else {
    alert('Por favor, ingresa tu correo y contraseña.');
  }
  }

  registrar() {
    this.router.navigate(['/registrar']);}

  recuperar() {
    this.router.navigate(['/recuperar']);}
 
  ngOnInit() {
  }

}
