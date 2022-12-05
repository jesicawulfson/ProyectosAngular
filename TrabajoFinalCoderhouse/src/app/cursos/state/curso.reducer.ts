import { Action, createReducer, on } from '@ngrx/store';
import { CursoState } from 'src/app/models/curso.state';
import * as CursosActions from '../state/curso.actions';

export const cursosFeatureKey = 'cursos';

export const estadoInicial: CursoState = {
  cargando: false,
  cursos: []
};

export const reducer = createReducer(
  estadoInicial,
  on(CursosActions.cargarCursos, (state) => {
    return {...state, cargando: true }
  }),
  on(CursosActions.cargarCursosSuccess, (state, {cursos}) => {
    return {...state, cargando: false, cursos}
  }),
  on(CursosActions.cargarCursosFailure, (state, {error}) => {
    return state
  }),

);
