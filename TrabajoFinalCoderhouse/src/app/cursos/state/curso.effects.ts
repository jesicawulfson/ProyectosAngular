import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap, Observable, of, retry } from "rxjs";
import { Curso } from "src/app/models/curso";
import { CursoService } from "../services/curso.service"
import * as CursoActions from "../state/curso.actions"


@Injectable()
export class CursoEffects{
    cargarCursos$ = createEffect(() => {  
        return this.actions$.pipe(
        ofType(CursoActions.cargarCursos),
        concatMap(() => this.cursoService.obtenerCursos().pipe (
            map(( c: Curso[])  => CursoActions.cargarCursosSuccess({cursos: c}))
    ))
    );
    });

    agregarCurso$ = createEffect(() => {  
        return this.actions$.pipe(
        ofType(CursoActions.agregarCurso),
        concatMap(({curso}) => this.cursoService.agregarCurso(curso).pipe (
            map(( c: Curso )  => CursoActions.cargarCursos())
    ))
    );
    });

    eliminarCurso$ = createEffect(() => {  
        return this.actions$.pipe(
        ofType(CursoActions.eliminarCurso),
        concatMap(({curso}) => this.cursoService.eliminarCurso(curso).pipe (
            map(( c: Curso )  => CursoActions.cargarCursos())
    ))
    );
    });

    editarCurso$ = createEffect(() => {  
        return this.actions$.pipe(
        ofType(CursoActions.editarCurso),
        concatMap(({curso}) => this.cursoService.editarCurso(curso).pipe (
            map(( c: Curso )  => CursoActions.cargarCursos())
    ))
    );
    });

    constructor(
        private actions$: Actions,
        private cursoService: CursoService
    ){}
}