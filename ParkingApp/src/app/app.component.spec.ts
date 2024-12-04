import { TestBed } from '@angular/core/testing';
import { RouterModule, ActivatedRoute  } from '@angular/router';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { CrudFirebaseService } from './servicios/crudfirebase.service';
import { environment } from '../environments/environment';

// Crea un mock de ActivatedRoute
const activatedRouteMock = {
  snapshot: {
    paramMap: {
      get: () => 'mockValue',  // Ajusta esto según lo que necesites para tu prueba
    }
  }
};

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        MatToolbarModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),  // Usa la configuración de Firebase desde environment.ts
        AngularFireAuthModule
      ],
      declarations: [AppComponent],
      providers: [
        CrudFirebaseService,
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should not display the default title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.title = '';  // Asigna un valor vacío a title
    fixture.detectChanges();  // Detecta los cambios

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).not.toContain('Hello, ParkingApp');
  });

  it('should not render any title in the h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
  
    // Asignar título vacío para asegurarse de que no se renderice texto
    app.title = ''; 
    fixture.detectChanges();  // Detectar los cambios después de modificar el title
  
    const compiled = fixture.nativeElement as HTMLElement;
    const h1 = compiled.querySelector('h1');  // Obtener el <h1> del DOM
  
    expect(h1).toBeTruthy();  // Verifica que el <h1> esté presente
    expect(h1?.textContent?.trim()).toBe('');  // Verifica que el contenido esté vacío
  });
});
