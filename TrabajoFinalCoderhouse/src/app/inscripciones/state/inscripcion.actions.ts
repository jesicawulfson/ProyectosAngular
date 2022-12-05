import { createAction, props } from "@ngrx/store";
import { Inscripcion } from "src/app/models/inscripcion";

export const cargarInscripciones = createAction(
    '[Inscripciones] Cargar Inscripciones'
  );
  
  export const cargarInscripcionesSuccess = createAction(
    '[Inscripciones] Cargar Inscripciones Success',
    props<{ inscripciones: Inscripcion[] }>()
  );
  
  export const cargarInscripcionesFailure = createAction(
    '[Inscripciones] Cargar Inscripciones Failure',
    props<{ error: any }>()
  );
  export const agregarInscripcion = createAction(
    '[Inscripciones] Agregar Inscripcion',
    props<{ inscripcion: Inscripcion }>()
  );
  
  export const eliminarInscripcion = createAction(
    '[Inscripciones] Eliminar Inscripcion',
    props<{ inscripcion: Inscripcion }>()
  );
  
  export const editarInscripcion = createAction(
    '[Inscripciones] Editar Inscripcion',
    props<{ inscripcion: Inscripcion }>()
  );