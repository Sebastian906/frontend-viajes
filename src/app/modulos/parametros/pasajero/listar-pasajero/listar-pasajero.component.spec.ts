import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPasajeroComponent } from './listar-pasajero.component';

describe('ListarPasajeroComponent', () => {
  let component: ListarPasajeroComponent;
  let fixture: ComponentFixture<ListarPasajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPasajeroComponent]
    });
    fixture = TestBed.createComponent(ListarPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
