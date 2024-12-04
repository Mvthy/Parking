import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';  // Agregar estas importaciones
import { DataService } from './api-rest.service';  // Asegúrate de que el nombre de la clase y el archivo sean correctos

describe('ApiRestService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Añadir HttpClientTestingModule
      providers: [DataService]  // Asegurarte de que el proveedor del servicio esté presente
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);  // Inyectar el controlador de pruebas HTTP
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Aquí puedes agregar más pruebas que se conecten con HttpClient
});
