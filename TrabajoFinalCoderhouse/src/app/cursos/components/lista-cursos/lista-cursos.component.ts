import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { selectStateCursos } from 'src/app/cursos/state/curso.selector';
import { CursoState } from 'src/app/models/curso.state';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { selectUsuarioActivoState } from 'src/app/core/state/sesion.selectors';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos$!: Observable<Curso[]>;
  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'imagen', 'acciones']
  esAdmin: boolean = false;
  constructor(
    private router: Router,
    private store: Store<CursoState>,
    private dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.cursos$ = this.store.select(selectStateCursos);
    this.store.select(selectUsuarioActivoState).subscribe({
      next: (usuario: Usuario | undefined) => {
        if(usuario?.admin) {
          this.esAdmin = true;
        }
        else {
          this.esAdmin = false;
        }
      },
    });
  }

  eliminarCurso(curso: Curso) {
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: curso
    });
  }

  editarCurso(curso: Curso) {
    this.router.navigate(['/cursos/editar', curso]);
  }

}
