import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { selectSesionActiva } from '../../../core/state/sesion.selectors';
import { registrarUsuario } from 'src/app/core/state/usuario.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmPasswordValidator } from 'src/assets/confirm-password.validator';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  suscripcionSesion!: Subscription;
  public formulario!: FormGroup;
  public passwordNotMatch: boolean = true;

  constructor(private store: Store<Sesion>, private router: Router,  private fb: FormBuilder, private _snackBar: MatSnackBar) { 
    this.formulario = fb.group({
      usuario: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required]),
      repitecontrasena: new FormControl('', [Validators.required]),
    },
    {
      validator: ConfirmPasswordValidator("contrasena", "repitecontrasena")
    });
  }

  ngOnInit(): void {
    this.suscripcionSesion = this.store.select(selectSesionActiva).subscribe({
      next: (sesion: Sesion) => {
        if(sesion.sesionActiva) {
          this.router.navigate(['inicio']);
        }
      },
    });
  }
  registrar(){
    let usuario: Usuario = {
      id: Math.round(Math.random()*1000),
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      admin: false
    }
    this.store.dispatch(registrarUsuario({usuario}));
    this._snackBar.open("Usuario registrado", "Cerrar");
    this.router.navigate(['inicio'])
  }
  cancelar(){
    this.router.navigate(['inicio']);
  }

  
}


