import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { selectUsuarioActivoState } from '../../state/sesion.selectors';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {
  usuario$!: Observable<Usuario | undefined>;

  constructor(private store: Store<Sesion>) { }

  ngOnInit(): void {
    this.usuario$ = this.store.select(selectUsuarioActivoState);
  }

}
