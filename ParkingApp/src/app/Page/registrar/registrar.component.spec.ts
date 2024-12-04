import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarComponent } from './registrar.component';
import { SharedModule } from '../shared/shared.module';  // Asegúrate de usar la ruta correcta
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from '../../../environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Para pruebas HTTP

describe('RegistrarComponent', () => {
  let component: RegistrarComponent;
  let fixture: ComponentFixture<RegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarComponent],
      imports: [
        SharedModule,  // Importa SharedModule que contiene Angular Material
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        HttpClientTestingModule  // Importa HttpClientTestingModule para pruebas HTTP
      ],
      providers: [
        {
          provide: FIREBASE_OPTIONS,
          useValue: environment.firebaseConfig
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
