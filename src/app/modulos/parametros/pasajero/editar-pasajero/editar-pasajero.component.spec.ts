import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPasajeroComponent } from './editar-pasajero.component';

describe('EditarPasajeroComponent', () => {
  let component: EditarPasajeroComponent;
  let fixture: ComponentFixture<EditarPasajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPasajeroComponent]
    });
    fixture = TestBed.createComponent(EditarPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
