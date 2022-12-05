import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AlumnoState } from 'src/app/models/alumno.state';
import { selectStateAlumnos } from '../../state/alumno.selector';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { selectUsuarioActivoState } from 'src/app/core/state/sesion.selectors';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  alumnos$!: Observable<Alumno[]>;
  esAdmin: boolean = false;
  columnas: string[] = ['dni','nombre','fechanacimiento', 'genero', 'acciones']
  constructor(
    private router: Router,
    private store: Store<AlumnoState>,
    private dialog: MatDialog
  ) {
    this.alumnos$ = this.store.select(selectStateAlumnos);
  }

  ngOnInit(): void {
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

  ngOnDestroy(): void {

  }

  eliminarAlumno(alumno: Alumno) {
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: alumno
    });
  }

  editarAlumno(alumno: Alumno) {
    this.router.navigate(['/alumnos/editar', alumno]);
  }
}
