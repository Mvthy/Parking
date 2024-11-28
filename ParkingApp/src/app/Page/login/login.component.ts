
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
    this.errors = [];
  
    // Validaciones
    if (!this.usuario) this.errors.push('Usuario es requerido');
    if (!this.clave) this.errors.push('Clave es requerida');
    if (!this.tipoUsuario) this.errors.push('Seleccione un tipo de usuario');
  
    if (this.errors.length === 0) {
      // Llamada al servicio de autenticación
      const isAuthenticated = await this.authService.signIn(this.usuario, this.clave);
  
      if (isAuthenticated) {
        // Creamos los parámetros de navegación para pasar al HomeComponent
        const navigationExtras: NavigationExtras = {
          queryParams: { usuario: this.usuario, tipoUsuario: this.tipoUsuario }
        };
  
        // Redirige según el tipo de usuario
        switch (this.tipoUsuario) {
          case 'arrendador':
            this.router.navigate(['/home/arrendador'], navigationExtras); // Redirige a la página home-arrendador
            break;
          case 'dueno':
            this.router.navigate(['/home/dueno'], navigationExtras); // Redirige a la página home-dueno
            break;
          case 'administrador':
            this.router.navigate(['/home'], navigationExtras); // Redirige a home con los parámetros
            break;
          default:
            this.router.navigate(['/home'], navigationExtras); // Redirige a home por defecto
        }
      } else {
        alert('Credenciales inválidas. Intente de nuevo.');
      }
    }
  }

  registrar() {
    this.router.navigate(['/registrar']);}

  recuperar() {
    this.router.navigate(['/recuperar']);}
 
  ngOnInit() {
  }

}
