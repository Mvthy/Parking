import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importar Router
import { CrudFirebaseService } from '../../servicios/crudfirebase.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  email: string = '';  // Variable para almacenar el correo electrónico ingresado por el usuario
  password: string = '';  // Variable para almacenar la contraseña ingresada por el usuario

  constructor(private crudService: CrudFirebaseService, private router: Router) {}  // Inyección de Router

  ngOnInit(): void { }

  // Método para agregar un nuevo usuario
  async addUser() {
    if (this.email && this.password) {  // Verifica si se ha ingresado un correo y una contraseña
      await this.crudService.addUser(this.email, this.password);  // Llama al servicio para agregar un usuario
      this.email = '';  // Limpia el campo de correo electrónico
      this.password = '';  // Limpia el campo de contraseña
    } else {
      alert('Por favor, ingresa un correo y contraseña.');  // Muestra un mensaje si faltan datos
    }
  }

  // Método para redirigir a la página de Login
  login() {
    this.router.navigate(['/login']);  // Redirige al usuario a la página de login
  }
}
