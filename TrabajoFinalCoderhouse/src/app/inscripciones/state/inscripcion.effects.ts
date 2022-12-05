import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap, Observable, of, retry } from "rxjs";
import { Inscripcion } from "src/app/models/inscripcion";
import { InscripcionService } from "../services/inscripcion.service"
import * as InscripcionesActions from "./inscripcion.actions"


@Injectable()
export class InscripcionesEffects{
    cargarInscripciones$ = createEffect(() => {  
        return this.actions$.pipe(
        ofType(InscripcionesActions.cargarInscripciones),
        concatMap(() => this.inscripcionService.obtenerInscripciones().pipe (
            map(( i: Inscripcion[])  => InscripcionesActions.cargarInscripcionesSuccess({inscripciones: i}))
    ))
    );
    });

    agregarInscripciones$ = createEffect(() => {  
        return this.actions$.pipe(
        ofType(InscripcionesActions.agregarInscripcion),
        concatMap(({inscripcion}) => this.inscripcionService.agregarInscripcion(inscripcion).pipe (
            map(( i: Inscripcion )  => InscripcionesActions.cargarInscripciones())
    ))
    );
    });

    eliminarInscripcion$ = createEffect(() => {  
        return this.actions$.pipe(
        ofType(InscripcionesActions.eliminarInscripcion),
        concatMap(({inscripcion}) => this.inscripcionService.eliminarInscripcion(inscripcion).pipe (
            map(( i: Inscripcion )  => InscripcionesActions.cargarInscripciones())
    ))
    );
    });

    editarInscripcion$ = createEffect(() => {  
        return this.actions$.pipe(
        ofType(InscripcionesActions.editarInscripcion),
        concatMap(({inscripcion}) => this.inscripcionService.editarInscripcion(inscripcion).pipe (
            map(( i: Inscripcion )  => InscripcionesActions.cargarInscripciones())
    ))
    );
    });

    constructor(
        private actions$: Actions,
        private inscripcionService: InscripcionService
    ){}
}