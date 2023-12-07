import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarConductorComponent } from './conductores/listar-conductor/listar-conductor.component';
import { CrearConductorComponent } from './conductores/crear-conductor/crear-conductor.component';
import { EliminarConductorComponent } from './conductores/eliminar-conductor/eliminar-conductor.component';
import { EditarConductorComponent } from './conductores/editar-conductor/editar-conductor.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
