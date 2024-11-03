import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaAutoComponent } from './ficha-auto.component';

describe('FichaAutoComponent', () => {
  let component: FichaAutoComponent;
  let fixture: ComponentFixture<FichaAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FichaAutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
