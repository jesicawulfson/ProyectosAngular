import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { sesionCerrada } from '../../state/sesion.actions';
import { selectSesionActiva } from '../../state/sesion.selectors';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  sesion$!: Observable<Sesion>;

  constructor( private store: Store<Sesion>, private router: Router, ) { }

  ngOnInit(): void {
    this.sesion$ = this.store.select(selectSesionActiva);
  }

  logout(){
    this.store.dispatch(sesionCerrada());
    this.router.navigate(['/autenticacion/login']);
  }
}
