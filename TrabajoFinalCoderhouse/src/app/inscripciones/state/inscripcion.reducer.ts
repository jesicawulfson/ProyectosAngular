import { Action, createReducer, on } from '@ngrx/store';
import { InscripcionState } from 'src/app/models/inscripcion.state';
import * as InscripcionesActions from './inscripcion.actions';

export const inscripcionesFeatureKey = 'inscripciones';

export const estadoInicial: InscripcionState = {
  cargando: false,
  inscripciones: []
};

export const reducer = createReducer(
  estadoInicial,
  on(InscripcionesActions.cargarInscripciones, (state) => {
    return {...state, cargando: true }
  }),
  on(InscripcionesActions.cargarInscripcionesSuccess, (state, {inscripciones}) => {
    return {...state, cargando: false, inscripciones}
  }),
  on(InscripcionesActions.cargarInscripcionesFailure, (state, {error}) => {
    return state
  }),

);