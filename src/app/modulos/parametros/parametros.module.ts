import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { EliminarPasajeroComponent } from './pasajero/eliminar-pasajero/eliminar-pasajero.component';
import { CrearPasajeroComponent } from './pasajero/crear-pasajero/crear-pasajero.component';
import { EditarPasajeroComponent } from './pasajero/editar-pasajero/editar-pasajero.component';
import { ListarPasajeroComponent } from './pasajero/listar-pasajero/listar-pasajero.component';
import { ListarConductorComponent } from './conductor/listar-conductor/listar-conductor.component';
import { CrearConductorComponent } from './conductor/crear-conductor/crear-conductor.component';
import { EditarConductorComponent } from './conductor/editar-conductor/editar-conductor.component';
import { EliminarConductorComponent } from './conductor/eliminar-conductor/eliminar-conductor.component';


@NgModule({
  declarations: [
    EliminarPasajeroComponent,
    CrearPasajeroComponent,
    EditarPasajeroComponent,
    ListarPasajeroComponent,
    ListarConductorComponent,
    CrearConductorComponent,
    EditarConductorComponent,
    EliminarConductorComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
