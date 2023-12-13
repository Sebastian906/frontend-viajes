import { Component } from '@angular/core';
import { rutaModel } from 'src/app/modelos/ruta.model';
import { ParametrosService } from 'src/app/servicios/parametros.service';
import { ViajeService } from 'src/app/servicios/viaje.service';

@Component({
  selector: 'app-listar-ruta',
  templateUrl: './listar-ruta.component.html',
  styleUrls: ['./listar-ruta.component.css']
})
export class ListarRutaComponent {
  distancia: string = "";
  precio: string = "";
  nodoInicio: string = "";
  nodoFinal: string = "";

  listaRegistros:rutaModel[]=[];

  constructor(
    private servicioParametros: ParametrosService,
    private servicioViaje: ViajeService
  ){

  }

  ngOnInit(){

  }

  CalcularRutaConCosto(){
//leer origen y destino

    // invocar al backend para traer distancia, valor, nodoInicio y nodoFinal
    this.servicioViaje.CalcularRutaConCosto().subscribe({
      next: (datos) => {
        this.distancia = datos.distanciaFinal;
        this.precio = datos.precio;
        this.nodoInicio = datos.nodoInicio;
        this.nodoFinal = datos.nodoFinal;
      },
      error: (err) => {
        alert("Error leyendo la información.")
      }
    })
  }

}
