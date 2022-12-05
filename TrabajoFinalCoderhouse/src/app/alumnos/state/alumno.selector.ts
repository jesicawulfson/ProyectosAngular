import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AlumnoState } from "src/app/models/alumno.state";
import * as fromAlumnos from '../state/alumno.reducer';

export const selectAlumnosState = createFeatureSelector<AlumnoState>(
    fromAlumnos.alumnosFeatureKey
);

export const selectStateAlumnos = createSelector(
  selectAlumnosState,
  (state: AlumnoState) => state.alumnos
)

export const selectStateCargando = createSelector(
    selectAlumnosState,
  (state: AlumnoState) => state.cargando
)