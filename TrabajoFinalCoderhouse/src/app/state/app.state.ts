import { ActionReducerMap } from "@ngrx/store";
import { CursoState } from "../models/curso.state";
import { reducer } from "../cursos/state/curso.reducer";
import { reducer as alumnosreducer } from "../alumnos/state/alumno.reducer";
import { reducer as usuariosreducer } from "../core/state/usuario.reducer";
import { AlumnoState } from "../models/alumno.state";
import { UsuarioState } from "../models/usuario.state";

export interface AppState{
    cursos: CursoState,
    alumnos: AlumnoState,
    usuarios: UsuarioState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    cursos: reducer,
    alumnos: alumnosreducer,
    usuarios: usuariosreducer
}