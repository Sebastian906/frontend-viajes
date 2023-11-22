import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userModel } from 'src/app/modelos/user.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-registro-publico-usuarios',
  templateUrl: './registro-publico-usuarios.component.html',
  styleUrls: ['./registro-publico-usuarios.component.css']
})
export class RegistroPublicoUsuariosComponent {

fGroup: FormGroup = new FormGroup({});

constructor(
  private fb: FormBuilder,
  private servicioSeguridad: SeguridadService,
) { 
}

ngOnInit() {
  this.ConstruirFormulario();
}
/**
   * Construcción del formulario con los controles
   */
ConstruirFormulario() {
  this.fGroup = this.fb.group({
    primerNombre: ['', [Validators.required, Validators.minLength(2)]],
    segundoNombre: ['', [Validators.minLength(2)]],
    primerApellido: ['', [Validators.required, Validators.minLength(2)]],
    segundoApellido: ['', [Validators.minLength(2)]],
    correo: ['', [Validators.required]],
    telefono: ['', [Validators.required, Validators.minLength(12)]],
    birthdate: ['', [Validators.required]],
    dni:['', [Validators.required, Validators.minLength(10)]],
    ciudad : ['',[Validators.required], Validators.minLength(2)]
  });
}

/**
 * Función de registro público
 */
Registrarse() {
  let campos = this.ObtenerFormGroup;
  let datos = {
    name: campos["primerNombre"].value,
    lastName: campos["primerApellido"].value,
    phone: campos["telefono"].value,
    city : campos["ciudad"].value,
    birthDate : campos["birthdate"].value,
    dni : campos["dni"].value,
    email: campos["correo"].value,
    secondName: campos["segundoNombre"].value,
    secondLastname: campos["segundoApellido"].value,
  }
  this.servicioSeguridad.RegistrarUsuarioPublico(datos).subscribe({
    next: (respuesta:userModel) => {
      alert("Registro correcto, se ha enviado un mensaje para validar su dirección de correo electrónico.")
    },
    error: (err) => {
      alert("Se ha producido un error en el registro.")
    }
  });
}

get ObtenerFormGroup(){
  return this.fGroup.controls;
}
}