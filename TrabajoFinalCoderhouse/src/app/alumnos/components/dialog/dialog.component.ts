import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoState } from 'src/app/models/alumno.state';
import { eliminarAlumno } from '../../state/alumno.actions';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  constructor( @Inject(MAT_DIALOG_DATA) private data: Alumno,
  private dialogRef: MatDialogRef<DialogComponent>,  
  private store: Store<AlumnoState>) { 

  }

  ngOnInit(): void {
  }

  onConfirmClick(): void {
    this.store.dispatch(eliminarAlumno({alumno: this.data}));
    this.dialogRef.close(true);
  }
}
