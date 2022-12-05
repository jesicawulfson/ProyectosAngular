import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';

export const cargarUsuarios = createAction(
    '[Usuarios] Cargar Usuarios'
  );
  
  export const cargarUsuariosSuccess = createAction(
    '[Usuarios] Cargar Usuarios Success',
    props<{ usuarios: Usuario[] }>()
  );

  export const cargarUsuariosFailure = createAction(
    '[Usuarios] Cargar Usuarios Failure',
    props<{ error: any }>()
  );

  export const registrarUsuario = createAction(
    '[Usuario] Registrar Usuario',
      props<{ usuario: Usuario}>()
  );
  
  export const usuarioRegistrado = createAction(
    '[Usuario] Usuario Registrado',
      props<{ usuario: Usuario }>()
  );
  
  export const eliminarUsuario = createAction(
    '[Usuario] Eliminar Usuario',
    props<{ usuario: Usuario }>()
  );
  
  export const editarUsuario = createAction(
    '[Usuario] Editar Usuario',
    props<{ usuario: Usuario }>()
  );