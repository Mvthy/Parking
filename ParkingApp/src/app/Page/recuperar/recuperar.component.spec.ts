import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarComponent } from './recuperar.component';
import { SharedModule } from '../shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; // Importa NoopAnimationsModule

describe('RecuperarComponent', () => {
  let component: RecuperarComponent;
  let fixture: ComponentFixture<RecuperarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecuperarComponent],
      imports: [
        SharedModule, // Importa SharedModule que ya contiene los módulos de Angular Material
        NoopAnimationsModule // Importa el módulo de animaciones para pruebas
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
