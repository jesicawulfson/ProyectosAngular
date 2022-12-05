import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { first, map, Observable, Subscription } from 'rxjs';
import { selectStateAlumnos } from 'src/app/alumnos/state/alumno.selector';
import { selectStateCursos } from 'src/app/cursos/state/curso.selector';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoState } from 'src/app/models/alumno.state';
import { Curso } from 'src/app/models/curso';
import { CursoState } from 'src/app/models/curso.state';
import { Inscripcion } from 'src/app/models/inscripcion';
import { InscripcionState } from 'src/app/models/inscripcion.state';
import { agregarInscripcion } from '../../state/inscripcion.actions';


@Component({
  selector: 'app-agregar-inscripcion',
  templateUrl: './agregar-inscripcion.component.html',
  styleUrls: ['./agregar-inscripcion.component.css']
})
export class AgregarInscripcionComponent implements OnInit {
  formulario!: FormGroup;
  id!: number;
  cursos$!: Observable<Curso[]>;
  alumnos$!: Observable<Alumno[]>;


  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<InscripcionState>,
    private storeAlumnos: Store<AlumnoState>,
    private storeCursos: Store<CursoState>,
    private router: Router
  ) { }

  ngOnInit(): void { 
    this.cursos$ = this.storeCursos.select(selectStateCursos);
    this.alumnos$ = this.storeAlumnos.select(selectStateAlumnos);

    this.activatedRoute.paramMap.subscribe((parametros) => {
        this.id = parseInt(parametros.get('id') || '0');
        this.formulario = new FormGroup({
          alumnos: new FormControl( { disabled: false}, [Validators.required]),
          cursos: new FormControl( { disabled: false }, [Validators.required]),
        });

      }) 
  }

  agregarInscripcion() {
    let inscripcion: Inscripcion = {
      id: this.id,
      alumno: this.formulario.value.alumnos,
      curso: this.formulario.value.cursos
    }

    this.store.dispatch(agregarInscripcion({inscripcion}));

    this.router.navigate(['/inscripciones/lista'])
  }
}
