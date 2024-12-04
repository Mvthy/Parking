import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeArrendadorComponent } from './home-arrendador.component';
import { RouterTestingModule } from '@angular/router/testing';  // Importa RouterTestingModule
import { NO_ERRORS_SCHEMA } from '@angular/core';  // Para evitar errores con elementos desconocidos


describe('HomeArrendadorComponent', () => {
  let component: HomeArrendadorComponent;
  let fixture: ComponentFixture<HomeArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeArrendadorComponent],
      imports: [RouterTestingModule],  // Agrega el RouterTestingModule si usas rutas
      schemas: [NO_ERRORS_SCHEMA]  // Para evitar errores de componentes no reconocidos
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
