import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRutaComponent } from './listar-ruta.component';

describe('ListarRutaComponent', () => {
  let component: ListarRutaComponent;
  let fixture: ComponentFixture<ListarRutaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarRutaComponent]
    });
    fixture = TestBed.createComponent(ListarRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
