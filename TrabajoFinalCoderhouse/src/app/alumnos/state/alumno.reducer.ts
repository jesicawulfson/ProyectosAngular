import { Action, createReducer, on } from '@ngrx/store';
import { AlumnoState } from 'src/app/models/alumno.state';
import * as AlumnosActions from '../state/alumno.actions';

export const alumnosFeatureKey = 'alumnos';

export const estadoInicial: AlumnoState = {
  cargando: false,
  alumnos: []
};

export const reducer = createReducer(
  estadoInicial,
  on(AlumnosActions.cargarAlumnos, (state) => {
    return {...state, cargando: true }
  }),
  on(AlumnosActions.cargarAlumnosSuccess, (state, {alumnos}) => {
    return {...state, cargando: false, alumnos}
  }),
  on(AlumnosActions.cargarAlumnosFailure, (state, {error}) => {
    return state
  }),

);