import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { Observable } from 'rxjs';
import { driverModel } from '../modelos/driver.model';
import { ConfiguracionPaginacion } from '../config/configuracion.paginacion';

@Injectable({
  providedIn: 'root',
})
export class ParametrosService {
  urlBase: string = ConfiguracionRutasBackend.urlLogica;

  constructor(private http: HttpClient) {}

  /**
   * listado de conductores disponibles
   * @returns
   */
  listarRegistros(): Observable<driverModel[]> {

    return this.http.get<driverModel[]>(
      `${this.urlBase}driver?filter={"limit":${ConfiguracionPaginacion.registrosPorPagina},"where":{"available":true},"order":["name ASC"]}`
    );
  }

  }
