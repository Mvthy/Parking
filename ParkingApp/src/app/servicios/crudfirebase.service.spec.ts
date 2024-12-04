import { TestBed } from '@angular/core/testing';
import { CrudFirebaseService } from './crudfirebase.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';


describe('CrudFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig) // Usa la configuración de Firebase desde environment
      ],
      providers: [CrudFirebaseService]
    });
  });

  it('should be created', () => {
    const service: CrudFirebaseService = TestBed.inject(CrudFirebaseService);
    expect(service).toBeTruthy();
  });
});
