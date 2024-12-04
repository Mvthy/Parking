import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';  // Importa SharedModule
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Importa AngularFireAuth
import { AngularFireModule } from '@angular/fire/compat';  // Importa AngularFireModule
import { environment } from '../../../environments/environment'; // Tu configuración de Firebase

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientTestingModule, 
        SharedModule,
        AngularFireModule.initializeApp(environment.firebaseConfig) // Provee la configuración de Firebase
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { queryParams: of({ usuario: 'testUser', tipoUsuario: 'admin' }) }},
        { provide: AngularFireAuth, useValue: { authState: of(null) }}  // Mock de AngularFireAuth
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
