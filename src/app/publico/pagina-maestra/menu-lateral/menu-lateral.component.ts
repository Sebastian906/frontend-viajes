import { Component } from '@angular/core';
import { ItemMenuModel } from 'src/app/modelos/item.menu.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

declare const iniciarMenu: any;
@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css'],
})
export class MenuLateralComponent {
  listaMenu: ItemMenuModel[] = [];

  constructor(private servicioSeguridad: SeguridadService) {}

  ngOnInit(): void {
    this.listaMenu = this.servicioSeguridad.ObtenerDatosMenuLateral();
    iniciarMenu();
  }
}
