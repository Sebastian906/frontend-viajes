import { Component } from '@angular/core';
import { driverModel } from 'src/app/modelos/driver.model';
import { ParametrosService } from 'src/app/servicios/parametros.service';

@Component({
  selector: 'app-listar-conductor',
  templateUrl: './listar-conductor.component.html',
  styleUrls: ['./listar-conductor.component.css']
})
export class ListarConductorComponent {
  listaRegistros:driverModel[]=[];

  constructor(
    private servicioParametros: ParametrosService
  ) {

  }

  ngOnInit() {
    this.servicioParametros.listarRegistros().subscribe({
      next: (datos) => {
        this.listaRegistros = datos;
      },
      error: (err) => {
        alert("Error leyendo la información.")
      }
    })
  }
}
