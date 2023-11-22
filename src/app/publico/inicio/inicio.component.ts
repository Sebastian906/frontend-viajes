import { Component } from '@angular/core';
import { driverModel } from 'src/app/modelos/driver.model';
import { ParametrosService } from 'src/app/servicios/parametros.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  listaRegistros: driverModel[] = [];

  constructor(
    private parametrosService: ParametrosService
  ){
    
  }

  ngOnInit() {
    this.parametrosService.listarRegistros().subscribe({
      next: (data) => {
        this.listaRegistros = data;
      },
      error: (error) => {
        console.log(error);
      },
    })
  }
}
