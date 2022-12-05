import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Inscripcion } from "src/app/models/inscripcion";
import { InscripcionState } from "src/app/models/inscripcion.state";
import * as fromInscripciones from '../state/inscripcion.reducer';

export const selectInscripcionesState = createFeatureSelector<InscripcionState>(
  fromInscripciones.inscripcionesFeatureKey
);

export const selectInscripciones = createFeatureSelector<Inscripcion[]>('selectInscripciones');

export const selectStateInscripciones = createSelector(
  selectInscripcionesState,
  (state: InscripcionState) => state.inscripciones
)

export const selectStateCargando = createSelector(
    selectInscripcionesState,
  (state: InscripcionState) => state.cargando
)
