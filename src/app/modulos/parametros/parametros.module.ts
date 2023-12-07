import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { ListarConductorComponent } from './conductores/listar-conductor/listar-conductor.component';
import { CrearConductorComponent } from './conductores/crear-conductor/crear-conductor.component';
import { EditarConductorComponent } from './conductores/editar-conductor/editar-conductor.component';
import { EliminarConductorComponent } from './conductores/eliminar-conductor/eliminar-conductor.component';
import { ListarClienteComponent } from './clientes/listar-cliente/listar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';


@NgModule({
  declarations: [
    ListarConductorComponent,
    CrearConductorComponent,
    EditarConductorComponent,
    EliminarConductorComponent,
    ListarClienteComponent,
    CrearClienteComponent,
    EliminarClienteComponent,
    EditarClienteComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
