import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import { CursoState } from 'src/app/models/curso.state';
import { eliminarCurso } from '../../state/curso.actions';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  constructor( @Inject(MAT_DIALOG_DATA) private data: Curso,
  private dialogRef: MatDialogRef<DialogComponent>,  
  private store: Store<CursoState>) { 

  }

  ngOnInit(): void {
  }

  onConfirmClick(): void {
    this.store.dispatch(eliminarCurso({curso: this.data}));
    this.dialogRef.close(true);
  }
}
