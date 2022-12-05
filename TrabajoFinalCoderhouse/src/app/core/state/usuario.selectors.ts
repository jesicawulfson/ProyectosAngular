import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsuarioState } from 'src/app/models/usuario.state';
import * as fromUsuario from './usuario.reducer';

export const selectUsuarioState = createFeatureSelector<UsuarioState>(
  fromUsuario.usuarioFeatureKey
);


export const selectStateUsuarios = createSelector(
  selectUsuarioState,
  (state: UsuarioState) => state.usuarios
)

export const selectStateCargando = createSelector(
  selectUsuarioState,
  (state: UsuarioState) => state.cargando
)