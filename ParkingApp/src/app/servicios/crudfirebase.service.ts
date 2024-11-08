import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CrudFirebaseService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // Método asíncrono para agregar un nuevo usuario a Firebase Authentication
  async addUser(email: string, password: string): Promise<void> {
    try {
      // Intentamos crear un nuevo usuario con el correo y la contraseña proporcionados
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      // Imprimir en consola la información del usuario creado
      console.log('Usuario agregado:', userCredential.user);
      alert('¡Usuario registrado exitosamente!');
    } catch (error: any) {
      // Manejo de errores
      console.error('Error al agregar usuario:', error);
      if (error.code === 'auth/email-already-in-use') {
        alert('Este correo ya está en uso, por favor elige otro.');
      } else {
        alert('Error al registrar usuario: ' + error.message);
      }
    }
  }

  // Método asíncrono para eliminar al usuario autenticado actualmente
  async deleteUser(): Promise<void> {
    try {
      // Obtener el usuario actualmente autenticado
      const user = await this.afAuth.currentUser;
      if (user) {
        // Eliminar el usuario actual si está autenticado
        await user.delete();
        // Imprimir en consola que el usuario ha sido eliminado
        console.log('Usuario eliminado');
        // Confirmar la eliminación al usuario
        alert('Usuario eliminado exitosamente');
        // Redirigir al usuario a la página principal
        this.router.navigate(['/']);
      } else {
        alert('No hay un usuario autenticado para eliminar.');
      }
    } catch (error: any) {
      // Manejo de errores
      console.error('Error al eliminar usuario:', error);
      alert('No se pudo eliminar el usuario: ' + error.message);
    }
  }

  // Método asíncrono para obtener la información del usuario autenticado actualmente
  async getUser(): Promise<any> {
    try {
      // Obtener el usuario autenticado actualmente
      const user = await this.afAuth.currentUser;
      if (user) {
        // Si existe el usuario, devolver su información
        return user;
      } else {
        // Si no existe usuario autenticado, devolver null
        return null;
      }
    } catch (error: any) {
      // Manejo de errores
      console.error('Error al obtener usuario:', error);
      alert('No se pudo obtener la información del usuario.');
      return null;
    }
  }

  // Método asíncrono para cerrar la sesión del usuario autenticado actualmente
  async signOut(): Promise<void> {
    try {
      // Cerrar sesión usando Firebase Authentication
      await this.afAuth.signOut();
      // Imprimir en consola que la sesión ha sido cerrada
      console.log('Sesión cerrada');
      // Redirigir al usuario a la página de login
      this.router.navigate(['/login']);
    } catch (error: any) {
      // Manejo de errores
      console.error('Error al cerrar sesión:', error);
      alert('Error al cerrar sesión. Intenta de nuevo.');
    }
  }
}
