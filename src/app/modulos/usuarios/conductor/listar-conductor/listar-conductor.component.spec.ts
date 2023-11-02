import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConductorComponent } from './listar-conductor.component';

describe('ListarConductorComponent', () => {
  let component: ListarConductorComponent;
  let fixture: ComponentFixture<ListarConductorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarConductorComponent]
    });
    fixture = TestBed.createComponent(ListarConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
