import { Injectable } from '@angular/core';
import { userModel } from '../modelos/user.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { ValidatedUserModel } from '../modelos/validated.user.model';
@Injectable({
  providedIn: 'root',
})
export class SeguridadService {
  urlBase: string = ConfiguracionRutasBackend.urlSeguridad;
  constructor(private http: HttpClient) {
    this.validacionDeSesion();
  }

  /**
   * Identificar usuario
   * @param usuario
   * @param clave
   * @returns datos del usuario validado
   */
  IdentificarUsuario(usuario: string, clave: string): Observable<userModel> {
    return this.http.post<userModel>(`${this.urlBase}identify-user`, {
      email: usuario,
      password: clave,
    });
  }

  /**
   * Almacena los datos del usuario
   * @param datos datos del usuario
   */
  AlmacenarDatosUsuarioIdentificado(datos: userModel): boolean {
    let cadena = JSON.stringify(datos);
    let datosLS = localStorage.getItem('datos-usuario');
    if (datosLS) {
      return false;
    } else {
      localStorage.setItem('datos-usuario', cadena);
      return true;
    }
  }

  /**
   * Busca los datos en un localstorage de un usuario
   * @returns
   */
  ObtenerDatosUsuarioLS(): userModel | null {
    let datosLS = localStorage.getItem('datos-usuario');
    if (datosLS) {
      let datos = JSON.parse(datosLS);
      return datos;
    } else {
      return null;
    }
  }

  /**
   * Validar 2fa
   * @param idUsuario
   * @param codigo
   * @returns
   */
  ValidarCodigo2fa(
    idUsuario: string,
    codigo: string
  ): Observable<ValidatedUserModel> {
    return this.http.post<ValidatedUserModel>(`${this.urlBase}Verify-2fa`, {
      UserId: idUsuario,
      code2fa: codigo,
    });
  }

  RegistrarUsuarioPublico(datos: any): Observable<userModel> {
    return this.http.post<userModel>(`${this.urlBase}usuario-publico`, datos);
  }

  ValidarHashUsuarioPublico(hash: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.urlBase}validar-hash-usuario`, {
      codigoHash: hash,
    });
  }

  AlmacenarDatosUsuarioValidado(datos: ValidatedUserModel): boolean {
    let datosLS = localStorage.getItem('datos-sesion');
    if (datosLS != null) {
      return false;
    } else {
      let datosString = JSON.stringify(datos);
      localStorage.setItem('datos-sesion', datosString);
      this.ActualizarComportamientoUsuario(datos);
      return true;
    }
  }

  /**
   * Cerrando sesión
   */
  RemoverDatosUsuarioValidado() {
    let datosUsuario = localStorage.getItem('datos-usuario');
    let datosSesion = localStorage.getItem('datos-sesion');
    if (datosUsuario) {
      localStorage.removeItem('datos-usuario');
    }
    if (datosSesion) {
      localStorage.removeItem('datos-sesion');
    }
    localStorage.removeItem('menu-lateral');
    this.ActualizarComportamientoUsuario(new ValidatedUserModel());
  }

  CambiarClavePorUsuario(usuario: string): Observable<userModel> {
    return this.http.post<userModel>(`${this.urlBase}cambiar-clave`, {
      password: usuario,
    });
  }

  RecuperarClavePorUsuario(usuario: string): Observable<userModel> {
    return this.http.post<userModel>(`${this.urlBase}recuperar-clave`, {
      email: usuario,
    });
  }

  /**
   * Administración de la sesión de usuario
   */

  datosUsuarioValidado = new BehaviorSubject<ValidatedUserModel>(
    new ValidatedUserModel()
  );

  ObtenerDatosSesion(): Observable<ValidatedUserModel> {
    return this.datosUsuarioValidado.asObservable();
  }

  validacionDeSesion() {
    let ls = localStorage.getItem('datos-sesion');
    if (ls) {
      let objUsuario = JSON.parse(ls);
      this.ActualizarComportamientoUsuario(objUsuario);
    }
  }

  ActualizarComportamientoUsuario(datos: ValidatedUserModel) {
    return this.datosUsuarioValidado.next(datos);
  }
}
