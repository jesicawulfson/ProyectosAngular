import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';

export const cargarSesion = createAction(
  '[Sesion] Cargar Sesion',
  props<{ usuarioActivo: Usuario }>()
);

export const sesionCargada = createAction(
  '[Sesion] Sesion Cargada',
  props<{ usuarioActivo: Usuario }>()
);

export const cerrarSesion = createAction(
  '[Sesion] Cerrar Sesion',
  props<{ usuarioActivo: Usuario }>()
);

export const sesionCerrada = createAction(
  '[Sesion] Sesion Cerrada'
);

