import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { AlumnoService } from '../../services/alumno.service';
import { cargarAlumnos } from '../../state/alumno.actions';


@Component({
  selector: 'app-alumnos-inicio',
  templateUrl: './alumnos-inicio.component.html',
  styleUrls: ['./alumnos-inicio.component.css']
})
export class AlumnosInicioComponent implements OnInit {

  constructor(
    private alumnoService: AlumnoService, 
   
    private store: Store<AppState> ) { 
      this.store.dispatch(cargarAlumnos())
    }
  ngOnInit(): void {
  }
}
