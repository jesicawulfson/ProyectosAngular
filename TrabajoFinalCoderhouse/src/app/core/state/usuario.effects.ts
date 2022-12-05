import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap, Observable, of, retry } from "rxjs";
import { Usuario } from "src/app/models/usuario";
import { UsuarioService } from "../services/usuario.service"
import * as UsuarioActions from "../state/usuario.actions"


@Injectable()
export class UsuarioEffects{
    registrarUsuario$ = createEffect(() => {  
        return this.actions$.pipe(
        ofType(UsuarioActions.registrarUsuario),
        concatMap(({usuario}) => this.usuarioService.registrar(usuario).pipe (
            map(( u: Usuario )  => UsuarioActions.usuarioRegistrado({usuario}))
    ))
    );
    });

    cargarUsuarios$ = createEffect(() => {  
        return this.actions$.pipe(
        ofType(UsuarioActions.cargarUsuarios),
        concatMap(() => this.usuarioService.obtenerUsuarios().pipe (
            map(( u: Usuario[])  => UsuarioActions.cargarUsuariosSuccess({usuarios: u}))
    ))
    );
    });


    eliminarUsuario$ = createEffect(() => {  
        return this.actions$.pipe(
        ofType(UsuarioActions.eliminarUsuario),
        concatMap(({usuario}) => this.usuarioService.eliminarUsuario(usuario).pipe (
            map(( u: Usuario )  => UsuarioActions.cargarUsuarios())
    ))
    );
    });

    editarUsuario$ = createEffect(() => {  
        return this.actions$.pipe(
        ofType(UsuarioActions.editarUsuario),
        concatMap(({usuario}) => this.usuarioService.editarUsuario(usuario).pipe (
            map(( u: Usuario  )  => UsuarioActions.cargarUsuarios())
    ))
    );
    });

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ){}
}