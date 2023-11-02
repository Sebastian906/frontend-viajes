import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { CrearConductorComponent } from './conductor/crear-conductor/crear-conductor.component';
import { EditarConductorComponent } from './conductor/editar-conductor/editar-conductor.component';
import { EliminarConductorComponent } from './conductor/eliminar-conductor/eliminar-conductor.component';
import { ListarConductorComponent } from './conductor/listar-conductor/listar-conductor.component';
import { ListarPasajeroComponent } from './pasajero/listar-pasajero/listar-pasajero.component';
import { CrearPasajeroComponent } from './pasajero/crear-pasajero/crear-pasajero.component';
import { EditarPasajeroComponent } from './pasajero/editar-pasajero/editar-pasajero.component';
import { EliminarPasajeroComponent } from './pasajero/eliminar-pasajero/eliminar-pasajero.component';


@NgModule({
  declarations: [
    CrearConductorComponent,
    EditarConductorComponent,
    EliminarConductorComponent,
    ListarConductorComponent,
    ListarPasajeroComponent,
    CrearPasajeroComponent,
    EditarPasajeroComponent,
    EliminarPasajeroComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
