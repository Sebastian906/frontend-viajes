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
  urlBase:string = ConfiguracionRutasBackend.urlSeguridad;
  constructor(private http: HttpClient) {
    this.validacionDeSesion();
  }

  /**
   * Identificar usuario
   * @param usuario
   * @param clave
   * @returns datos del usuario validado
   */
  IdentificarUsuario(usuario:string, clave: string): Observable<userModel> {
    return this.http.post<userModel>(`${this.urlBase}identify-user`, {
      email: usuario,
      password: clave
    });
  }

  /**
   * Almacena los datos del usuario
   * @param datos datos del usuario
   */
  AlmacenarDatosUsuarioIdentificado(datos:userModel):boolean {
    let cadena = JSON.stringify(datos);
    let datosLS = localStorage.getItem("datos-usuario");
    if(datosLS) {
      return false;
    } else {
      localStorage.setItem("datos-usuario", cadena);
      return true;
    }
  }

  /**
   * Busca los datos en un localstorage de un usuario
   * @returns
   */
  ObtenerDatosUsuarioLS():userModel | null {
    let datosLS = localStorage.getItem("datos-usuario");
    if(datosLS) {
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
  ValidarCodigo2fa(idUsuario:string, codigo: string): Observable<ValidatedUserModel> {
    return this.http.post<ValidatedUserModel>(`${this.urlBase}Verify-2fa`, {
      userId: idUsuario,
      code2fa: codigo
    });
  }

  AlmacenarDatosUsuarioValidado(datos:ValidatedUserModel): boolean {
    let datosLS = localStorage.getItem("datos-sesion");
    if(datosLS != null) {
      return false;
    } else {
      let datosString = JSON.stringify(datos);
      localStorage.setItem("datos-sesion", datosString);
      return true;
    }
  }

  /**
   * Administración de la sesión de usuario
   */

  datosUsuarioValidado = new BehaviorSubject<ValidatedUserModel>(new ValidatedUserModel());

  ObtenerDatosSesion():Observable<ValidatedUserModel>{
    return this.datosUsuarioValidado.asObservable();
  }

  validacionDeSesion() {
    let ls = localStorage.getItem("datos-sesion");
    if(ls) {
      let objUsuario = JSON.parse(ls);
      this.ActualizarComportamientoUsuario(objUsuario);
    }
  }

  ActualizarComportamientoUsuario(datos: ValidatedUserModel) {
    return this.datosUsuarioValidado.next(datos)
  }

}
