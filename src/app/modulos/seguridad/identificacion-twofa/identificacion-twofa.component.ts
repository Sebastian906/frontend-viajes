import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-identificacion-twofa',
  templateUrl: './identificacion-twofa.component.html',
  styleUrls: ['./identificacion-twofa.component.css']
})
export class IdentificacionTwofaComponent {

  userId: string="";
  fGroup:FormGroup = new FormGroup({});

  constructor(
    private servicioSeguridad: SeguridadService,
    private fb: FormBuilder
    ) {

  }

  ngOnInit() {
    let datos = this.servicioSeguridad.ObtenerDatosUsuarioLS();
    if(datos != null) {
      this.userId = datos._id!;
      this.ConstruirFormulario();
    }
  }

  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      codigo: ['', [Validators.required]]
    })
  }

  ValidarCodigo2fa() {
    if(this.fGroup.invalid) {
      alert("Debe ingresar el código");
    } else {
      let code2fa = this.ObtenerFormGroup["codigo"].value;
      this.servicioSeguridad.ValidarCodigo2fa(this.userId, code2fa).subscribe({
        next: (datos:object) => {
          console.log(datos);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  get ObtenerFormGroup() {
    return this.fGroup.controls;
  }

}
