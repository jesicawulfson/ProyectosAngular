import { createAction, props } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';

export const cargarCursos = createAction(
  '[Cursos] Cargar Cursos'
);

export const cargarCursosSuccess = createAction(
  '[Cursos] Cargar Cursos Success',
  props<{ cursos: Curso[] }>()
);

export const cargarCursosFailure = createAction(
  '[Cursos] Cargar Cursos Failure',
  props<{ error: any }>()
);

export const agregarCurso = createAction(
  '[Cursos] Agregar Curso',
  props<{ curso: Curso }>()
);

export const eliminarCurso = createAction(
  '[Cursos] Eliminar Curso',
  props<{ curso: Curso }>()
);

export const editarCurso = createAction(
  '[Cursos] Editar Curso',
  props<{ curso: Curso }>()
);