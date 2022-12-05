import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioState } from 'src/app/models/usuario.state';
import { eliminarUsuario } from '../../state/usuario.actions';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  constructor( @Inject(MAT_DIALOG_DATA) private data: Usuario,
  private dialogRef: MatDialogRef<DialogComponent>,  
  private store: Store<UsuarioState>) { 

  }

  ngOnInit(): void {
  }

  onConfirmClick(): void {
    this.store.dispatch(eliminarUsuario({usuario: this.data}));
    this.dialogRef.close(true);
  }
}
