import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConductorComponent } from './editar-conductor.component';

describe('EditarConductorComponent', () => {
  let component: EditarConductorComponent;
  let fixture: ComponentFixture<EditarConductorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarConductorComponent]
    });
    fixture = TestBed.createComponent(EditarConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
