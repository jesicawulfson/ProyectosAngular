import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap, Observable, of, retry } from "rxjs";
import { Usuario } from "src/app/models/usuario";
import { SesionService } from "../services/sesion.service";
import * as SesionActions from "../state/sesion.actions"


@Injectable()
export class SesionEffects{
    cargarSesion$ = createEffect(() => {  
        return this.actions$.pipe(
        ofType(SesionActions.cargarSesion),
        concatMap(({usuarioActivo}) => this.sesionService.login(usuarioActivo.usuario, usuarioActivo.contrasena).pipe (
            map(( u: Usuario)  => SesionActions.sesionCargada({usuarioActivo: u}))
    ))
    );
    });
    
    constructor(
        private actions$: Actions,
        private sesionService: SesionService
    ){}
}