import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPasajeroComponent } from './crear-pasajero.component';

describe('CrearPasajeroComponent', () => {
  let component: CrearPasajeroComponent;
  let fixture: ComponentFixture<CrearPasajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPasajeroComponent]
    });
    fixture = TestBed.createComponent(CrearPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
