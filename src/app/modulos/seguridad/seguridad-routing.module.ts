import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificacionUsuarioComponent } from './identificacion-usuario/identificacion-usuario.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionTwofaComponent } from './identificacion-twofa/identificacion-twofa.component';
import { RegistroPublicoUsuariosComponent } from './registro-publico-usuarios/registro-publico-usuarios.component';
import { ValidarHashUsuarioPublicoComponent } from './validar-hash-usuario-publico/validar-hash-usuario-publico.component';
import { CrearPasajeroComponent } from '../usuarios/pasajero/crear-pasajero/crear-pasajero.component';
import { ListarPasajeroComponent } from '../usuarios/pasajero/listar-pasajero/listar-pasajero.component';
import { EditarPasajeroComponent } from '../usuarios/pasajero/editar-pasajero/editar-pasajero.component';
import { EliminarPasajeroComponent } from '../usuarios/pasajero/eliminar-pasajero/eliminar-pasajero.component';

const routes: Routes = [
  {
    path: 'identificar-usuario',
    component: IdentificacionUsuarioComponent,
  },
  {
    path: 'cambiar-clave',
    component: CambioClaveComponent,
  },
  {
    path: 'recuperar-clave',
    component: RecuperarClaveComponent,
  },
  {
    path: 'cerrar-sesion',
    component: CerrarSesionComponent,
  },
  {
    path: '2fa',
    component: IdentificacionTwofaComponent,
  },
  {
    path: 'registro-publico',
    component: RegistroPublicoUsuariosComponent,
  },
  {
    path: 'validar-hash-usuario-publico/:hash',
    component: ValidarHashUsuarioPublicoComponent,
  },
  {
    path: 'passenger-create',
    component: CrearPasajeroComponent,
  },
  {
    path: 'passenger-list',
    component: ListarPasajeroComponent,
  },
  {
    path: 'passenger-edit/:id',
    component: EditarPasajeroComponent,
  },
  {
    path: 'passenger-delete/:id',
    component: EliminarPasajeroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadRoutingModule {}
