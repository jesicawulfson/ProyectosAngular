import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';
import * as SesionActions from './sesion.actions';

export const sesionFeatureKey = 'sesion';

export interface SesionState {
  sesionActiva: boolean;
  usuarioActivo?: Usuario; 
  estaRegistrado: boolean;
}

export const initialState: SesionState = {
  sesionActiva: false,
  estaRegistrado: false,
};

export const reducer = createReducer(
  initialState,
  
  on(SesionActions.cargarSesion, (state, {usuarioActivo}) => {
    return { ...state, sesionActiva: false, usuarioActivo: undefined, estaRegistrado: false }
  }),
  on(SesionActions.sesionCargada, (state, {usuarioActivo}) => {
    return { ...state, sesionActiva: true, usuarioActivo: usuarioActivo, estaRegistrado: true }
  }),
  
  on(SesionActions.cerrarSesion, (state, {usuarioActivo}) => {
    return { ...state, sesionActiva: true, usuarioActivo: usuarioActivo, estaRegistrado: true }
  }),
  on(SesionActions.sesionCerrada, (state) => {
    return { ...state, sesionActiva: false, usuarioActivo: undefined, estaRegistrado: false }
  }),

);
