import { TestBed } from '@angular/core/testing';

import { CrudFirebaseService } from './crudfirebase.service';

describe('CrudfirebaseService', () => {
  let service: CrudFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
