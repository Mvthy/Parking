import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard'; // Asegúrate de que la ruta sea correcta
import { AuthService } from '../servicios/auth.service'; // Ajusta la ruta según tu estructura
import { Router } from '@angular/router';
import { of } from 'rxjs'; // Para crear flujos observables
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Importa AngularFireAuth para mockearlo


// Mock para AuthService
class MockAuthService {
  // Simula la respuesta del servicio isLoggedIn
  isLoggedIn() {
    return of(true); // Devuelve un valor observable (puede ser true o false según lo que desees probar)
  }
}

// Mock para AngularFireAuth (si es necesario)
class MockAngularFireAuth {
  // Simula las funcionalidades de AngularFireAuth si es necesario
}

describe('AuthGuard', () => {
  let guard: AuthGuard; // Crea una instancia de AuthGuard

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useClass: MockAuthService }, // Usa el mock del servicio de autenticación
        { provide: AngularFireAuth, useClass: MockAngularFireAuth }, // Usa el mock de AngularFireAuth
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } } // Mockea el Router
      ]
    });
    guard = TestBed.inject(AuthGuard); // Inyecta el guardia para las pruebas
  });

  it('should be created', () => {
    expect(guard).toBeTruthy(); // Verifica que el guardia fue creado correctamente
  });

  it('should navigate to login if not authenticated', () => {
    // Simula un estado no autenticado
    spyOn(MockAuthService.prototype, 'isLoggedIn').and.returnValue(of(false));

    // Ejecuta el guard y verifica si se navega al login
    guard.canActivate().subscribe(result => {
      expect(result).toBe(false);
      expect(TestBed.inject(Router).navigate).toHaveBeenCalledWith(['/login']);
    });
  });

  it('should allow access if authenticated', () => {
    // Simula un estado autenticado
    spyOn(MockAuthService.prototype, 'isLoggedIn').and.returnValue(of(true));

    // Ejecuta el guard y verifica si se permite el acceso
    guard.canActivate().subscribe(result => {
      expect(result).toBe(true);
    });
  });
});