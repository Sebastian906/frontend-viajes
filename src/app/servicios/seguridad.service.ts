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

  IdentificarUsuario(usuario:string, clave: string): Observable<userModel> {
    return this.http.post<userModel>(`${this.urlBase}identificar-usuario`, {
      correo: usuario,
      clave: clave
    });
  }

}
