import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPasajeroComponent } from './eliminar-pasajero.component';

describe('EliminarPasajeroComponent', () => {
  let component: EliminarPasajeroComponent;
  let fixture: ComponentFixture<EliminarPasajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarPasajeroComponent]
    });
    fixture = TestBed.createComponent(EliminarPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
