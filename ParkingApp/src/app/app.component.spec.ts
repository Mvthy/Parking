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

  it(`should have as title 'ParkingApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ParkingApp');
  });

  it('should render title in the h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, ParkingApp');
  });
});
