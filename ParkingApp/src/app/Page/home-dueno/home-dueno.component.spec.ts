import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeDuenoComponent } from './home-dueno.component';
import { SharedModule } from '../shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

// Mock del ActivatedRoute
class MockActivatedRoute {
  queryParams = of({
    usuario: 'testUser', // Valor simulado para el parámetro usuario
    tipoUsuario: 'admin' // Valor simulado para el parámetro tipoUsuario
  });
}

describe('HomeDuenoComponent', () => {
  let component: HomeDuenoComponent;
  let fixture: ComponentFixture<HomeDuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeDuenoComponent],
      imports: [SharedModule],
      providers: [
        { 
          provide: ActivatedRoute, 
          useClass: MockActivatedRoute // Usamos el mock para ActivatedRoute
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Asegura que las propiedades sean detectadas
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize usuariohome and tipoUsuario from queryParams', () => {
    expect(component.usuariohome).toBe('testUser');
    expect(component.tipoUsuario).toBe('admin');
  });
});
