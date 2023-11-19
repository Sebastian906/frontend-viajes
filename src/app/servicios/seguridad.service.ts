import { Injectable } from '@angular/core';
import { userModel } from '../modelos/user.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';

@Injectable({
  providedIn: 'root',
})
export class SeguridadService {
  urlBase:string = ConfiguracionRutasBackend.urlSeguridad;
  constructor(private http: HttpClient) { }

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
  ValidarCodigo2fa(idUsuario:string, codigo: string): Observable<object> {
    return this.http.post<object>(`${this.urlBase}verify-2fa`, {
      userId: idUsuario,
      code2fa: codigo
    });
  }

}
