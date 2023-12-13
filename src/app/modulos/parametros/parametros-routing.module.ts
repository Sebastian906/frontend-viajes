import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarConductorComponent } from './conductores/listar-conductor/listar-conductor.component';
import { CrearConductorComponent } from './conductores/crear-conductor/crear-conductor.component';
import { EliminarConductorComponent } from './conductores/eliminar-conductor/eliminar-conductor.component';
import { EditarConductorComponent } from './conductores/editar-conductor/editar-conductor.component';
import { ListarRutaComponent } from './rutas/listar-ruta/listar-ruta.component';
import { CrearRutaComponent } from './rutas/crear-ruta/crear-ruta.component';
import { EditarRutaComponent } from './rutas/editar-ruta/editar-ruta.component';
import { EliminarRutaComponent } from './rutas/eliminar-ruta/eliminar-ruta.component';

const routes: Routes = [
  {
    path: "listar-conductor",
    component: ListarConductorComponent
  },
  {
    path: "crear-conductor",
    component: CrearConductorComponent
  },
  {
    path: "eliminar-conductor/:id",
    component: EliminarConductorComponent
  },
  {
    path: "editar-conductor/:id",
    component: EditarConductorComponent
  },
  {
    path: "listar-ruta",
    component: ListarRutaComponent
  },
  {
    path: "crear-ruta",
    component: CrearRutaComponent
  },
  {
    path: "editar-ruta/:id",
    component: EditarRutaComponent
  },
  {
    path: "eliminar-ruta/:id",
    component: EliminarRutaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
