import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap, Observable, of, retry } from "rxjs";
import { Alumno } from "src/app/models/alumno";
import { AlumnoService } from "../services/alumno.service"
import * as AlumnosActions from "../state/alumno.actions"


@Injectable()
export class AlumnoEffects{
    cargarAlumnos$ = createEffect(() => {  
        return this.actions$.pipe(
        ofType(AlumnosActions.cargarAlumnos),
        concatMap(() => this.alumnoService.obtenerAlumnos().pipe (
            map(( a: Alumno[])  => AlumnosActions.cargarAlumnosSuccess({alumnos: a}))
    ))
    );
    });

    agregarAlumnos$ = createEffect(() => {  
        return this.actions$.pipe(
        ofType(AlumnosActions.agregarAlumno),
        concatMap(({alumno}) => this.alumnoService.agregarAlumno(alumno).pipe (
            map(( a: Alumno )  => AlumnosActions.cargarAlumnos())
    ))
    );
    });

    eliminarAlumnos$ = createEffect(() => {  
        return this.actions$.pipe(
        ofType(AlumnosActions.eliminarAlumno),
        concatMap(({alumno}) => this.alumnoService.eliminarAlumno(alumno).pipe (
            map(( a: Alumno )  => AlumnosActions.cargarAlumnos())
    ))
    );
    });

    editarAlumnos$ = createEffect(() => {  
        return this.actions$.pipe(
        ofType(AlumnosActions.editarAlumno),
        concatMap(({alumno}) => this.alumnoService.editarAlumno(alumno).pipe (
            map(( a: Alumno )  => AlumnosActions.cargarAlumnos())
    ))
    );
    });

    constructor(
        private actions$: Actions,
        private alumnoService: AlumnoService
    ){}
}