import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cargarAlumnos } from 'src/app/alumnos/state/alumno.actions';
import { DialogComponent } from 'src/app/inscripciones/components/dialog/dialog.component';
import { cargarCursos } from 'src/app/cursos/state/curso.actions';
import { AlumnoState } from 'src/app/models/alumno.state';
import { CursoState } from 'src/app/models/curso.state';
import { Inscripcion } from 'src/app/models/inscripcion';
import { InscripcionState } from 'src/app/models/inscripcion.state';
import { cargarInscripciones } from '../../state/inscripcion.actions';
import { selectStateInscripciones } from '../../state/inscripcion.selector';
import { selectUsuarioActivoState } from 'src/app/core/state/sesion.selectors';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-lista-inscripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.css']
})
export class ListaInscripcionesComponent implements OnInit {
  inscripciones$!: Observable<Inscripcion[]>;
  columnas: string[] = ['curso', 'alumno', 'acciones']
  esAdmin: boolean = false;

  constructor(
    private router: Router,
    private store: Store<InscripcionState>,
    private storeAlumnos: Store<AlumnoState>,
    private storeCursos: Store<CursoState>,
    private dialog: MatDialog
  ) { 
    
    this.store.dispatch(cargarInscripciones());

    
    this.inscripciones$ = this.store.select(selectStateInscripciones);
  }

  ngOnInit(): void {
    this.storeAlumnos.dispatch(cargarAlumnos());
    this.storeCursos.dispatch(cargarCursos());
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

  eliminarInscripcion(inscripcion: Inscripcion) {
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: inscripcion
    });
  }

}
