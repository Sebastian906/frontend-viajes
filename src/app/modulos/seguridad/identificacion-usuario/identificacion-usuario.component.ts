import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { userModel } from 'src/app/modelos/user.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { MD5 } from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion-usuario',
  templateUrl: './identificacion-usuario.component.html',
  styleUrls: ['./identificacion-usuario.component.css'],
})
export class IdentificacionUsuarioComponent {
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) {}

  ngOnInit() {
    this.ConstruirFormulario();
  }

  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required]],
    });
  }


  get obtenerFormGroup() {
    return this.fGroup.controls;
  }
}
