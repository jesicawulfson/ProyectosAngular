import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioState } from 'src/app/models/usuario.state';
import { UsuarioService } from '../../services/usuario.service';
import { cargarUsuarios } from '../../state/usuario.actions';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  formulario: FormGroup;
  constructor( @Inject(MAT_DIALOG_DATA) public usuario: Usuario,
  private dialogRef: MatDialogRef<EditarUsuarioComponent>,
  private usuarioService: UsuarioService,
  private store: Store<UsuarioState>,
  private fb: FormBuilder,
  
  private snackBar: MatSnackBar) { 
    this.formulario = this.fb.group({
      esAdmin: new FormControl({ disabled: false, value: usuario.admin ? true : false }),
    })
    
  }

  ngOnInit(): void {
  }

  editarUsuario(){
    const u: Usuario = {
      id: this.usuario.id,
      usuario: this.usuario.usuario,
      admin: this.formulario.value.esAdmin,
      contrasena: this.usuario.contrasena
    }
    this.usuarioService.editarUsuario(u).subscribe((usuario) => {
      this.store.dispatch(cargarUsuarios());
      this.snackBar.open(`${usuario.usuario} fue editado exitosamente`, 'Ok', {duration: 3000});
      this.cerrarDialog();
    });
  }

  cerrarDialog(){
    this.dialogRef.close();
  }
}
