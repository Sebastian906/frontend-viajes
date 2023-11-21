import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userModel } from 'src/app/modelos/user.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css']
})
export class CambioClaveComponent {
  fgroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService
  ) {

  }

  ngOnInit() {
    this.fgroup = this.fb.group({
      usuario: ['',[Validators.required, Validators.email]]
    });
  }

  CambiarClave() {
    if(this.fgroup.invalid) {
      alert("Debe ingresar la nueva contraseña del usuario");
    } else {
      let usuario = this.obtenerFormGroup["usuario"].value;
      this.servicioSeguridad.CambiarClavePorUsuario(usuario).subscribe({
        next: (datos:userModel) => {
          alert("Se ha cambiado la contraseña" + datos.password)
        },
        error: (err:any) => {
          alert("Ha ocurrido un error cambiando la contraseña.")
        }
      });
    }
  }

  get obtenerFormGroup() {
    return this.fgroup.controls;
  }

}
