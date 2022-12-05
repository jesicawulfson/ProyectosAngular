import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SesionService } from 'src/app/core/services/sesion.service';
import { sesionCargada } from 'src/app/core/state/sesion.actions';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup
  usuarioValido: boolean = true;
  hide = true;
  constructor(
    private sesionService: SesionService,
    private router: Router,
    private store: Store<Sesion>,
    private snackBar: MatSnackBar
  ) {
    this.formulario = new FormGroup({
      usuario: new FormControl('Bailee30', [Validators.required]),
      contrasena: new FormControl('AD44tlW4BaY3CsG', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }
  registro(){
    this.router.navigate(['registro']);
  }
  login(){
    this.sesionService.login(this.formulario.value.usuario, this.formulario.value.contrasena).subscribe((usuario: Usuario) => {
      if(usuario){
        this.store.dispatch(sesionCargada({
          usuarioActivo: usuario
        }));
        this.usuarioValido = true;
        this.router.navigate(['inicio']);
      }
      else{
        this.usuarioValido = false;
        this.snackBar.open("Usuario y/o contraseña incorrectos");
      }
    });

  }
}
