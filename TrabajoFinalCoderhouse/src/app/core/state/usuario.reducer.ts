import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioState } from 'src/app/models/usuario.state';
import * as UsuarioActions from './usuario.actions';

export const usuarioFeatureKey = 'usuario';

export const estadoInicial: UsuarioState = {
    cargando: false,
    usuarios: []
};

export const reducer = createReducer(
    estadoInicial,
    on(UsuarioActions.cargarUsuarios, (state) => {
        return { ...state, cargando: true }
    }),
    on(UsuarioActions.cargarUsuariosSuccess, (state, { usuarios }) => {
        return { ...state, cargando: false, usuarios }
    }),
    on(UsuarioActions.cargarUsuariosFailure, (state, { error }) => {
        return state
    }),

);