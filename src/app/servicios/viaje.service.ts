import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rutaModel } from '../modelos/ruta.model';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  constructor(private http: HttpClient) {}

CalcularRutaConCosto():Observable<rutaModel>{
// invocar al backend para traer distancia, valor, nodoInicio y nodoFinal
return this.http.get<rutaModel>("");

}

}
