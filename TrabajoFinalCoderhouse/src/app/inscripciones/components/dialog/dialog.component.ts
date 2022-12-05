import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Inscripcion } from 'src/app/models/inscripcion';
import { InscripcionState } from 'src/app/models/inscripcion.state';
import { eliminarInscripcion } from '../../state/inscripcion.actions';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  constructor( @Inject(MAT_DIALOG_DATA) private data: Inscripcion,
  private dialogRef: MatDialogRef<DialogComponent>,  
  private store: Store<InscripcionState>) { 

  }

  ngOnInit(): void {
  }

  onConfirmClick(): void {
    this.store.dispatch(eliminarInscripcion({inscripcion: this.data}));
    this.dialogRef.close(true);
  }
}
