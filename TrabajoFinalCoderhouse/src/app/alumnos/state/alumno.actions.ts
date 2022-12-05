import { createAction, props } from "@ngrx/store";
import { Alumno } from "src/app/models/alumno";

export const cargarAlumnos = createAction(
    '[Alumnos] Cargar Alumnos'
  );
  
  export const cargarAlumnosSuccess = createAction(
    '[Alumnos] Cargar Alumnos Success',
    props<{ alumnos: Alumno[] }>()
  );
  
  export const cargarAlumnosFailure = createAction(
    '[Alumnos] Cargar Alumnos Failure',
    props<{ error: any }>()
  );
  export const agregarAlumno = createAction(
    '[Alumnos] Agregar Alumno',
    props<{ alumno: Alumno }>()
  );
  
  export const eliminarAlumno = createAction(
    '[Alumnos] Eliminar Alumno',
    props<{ alumno: Alumno }>()
  );
  
  export const editarAlumno = createAction(
    '[Alumnos] Editar Alumno',
    props<{ alumno: Alumno }>()
  );