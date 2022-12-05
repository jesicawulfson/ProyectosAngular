import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioState } from 'src/app/models/usuario.state';
import { SesionState } from '../../state/sesion.reducer';
import { selectUsuarioActivoState } from '../../state/sesion.selectors';
import { cargarUsuarios } from '../../state/usuario.actions';
import { selectStateUsuarios, selectUsuarioState } from '../../state/usuario.selectors';
import { DialogComponent } from '../dialog/dialog.component';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios$!: Observable<Usuario[]>;
  columnas: string[] = ['usuario', 'admin', 'acciones']
  esAdmin: boolean = false;
  
  constructor(
    private router: Router,
    private sesionstore: Store<SesionState>,
    private store: Store<UsuarioState>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.store.dispatch(cargarUsuarios());
    this.usuarios$ = this.store.select(selectStateUsuarios);
    this.sesionstore.select(selectUsuarioActivoState).subscribe({
      next: (usuario: Usuario | undefined) => {
        if(usuario?.admin) {
          this.esAdmin = true;
        }
        else {
          this.esAdmin = false;
        }
      },
    });
  }

  eliminarUsuario(usuario: Usuario) {
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: usuario
    });
  }

  editarUsuario(usuario: Usuario) {
    this.dialog.open(EditarUsuarioComponent, {
      width: '300px',
      data: usuario
    });
  }


}
