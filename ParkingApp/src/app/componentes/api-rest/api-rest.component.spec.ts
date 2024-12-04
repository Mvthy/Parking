import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiRestComponent } from './api-rest.component';
import { SharedModule } from '../../Page/shared/shared.module'; // Asegúrate de importar tu SharedModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('ApiRestComponent', () => {
  let component: ApiRestComponent;
  let fixture: ComponentFixture<ApiRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiRestComponent],
      imports: [
        SharedModule, // Tu módulo compartido
        BrowserAnimationsModule // Importa BrowserAnimationsModule para manejar las animaciones
      ]
    }).compileComponents();
  
    fixture = TestBed.createComponent(ApiRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
