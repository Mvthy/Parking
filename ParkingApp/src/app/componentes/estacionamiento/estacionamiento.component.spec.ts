import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EstacionamientoComponent } from './estacionamiento.component';

describe('EstacionamientoComponent', () => {
  let component: EstacionamientoComponent;
  let fixture: ComponentFixture<EstacionamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstacionamientoComponent],
      imports: [MatToolbarModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstacionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
