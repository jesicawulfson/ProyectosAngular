import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import { CursoState } from 'src/app/models/curso.state';
import { agregarCurso } from '../../state/curso.actions';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private router: Router,
    private store: Store<CursoState>
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      comision: new FormControl(),
      profesor: new FormControl(),
      inicio: new FormControl(new Date()), // Current Date
      fin: new FormControl(new Date()), // Current Date
      inscripcionAbierta: new FormControl()
    });
  }

  agregarCurso(){
    const curso: Curso = {
      id: Math.round(Math.random()*1000),
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.inicio.toISOString().slice(0, 10),
      fechaFin: this.formulario.value.fin.toISOString().slice(0, 10),
      profesor: this.formulario.value.profesor,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    };
    this.store.dispatch(agregarCurso({curso}));
    this.router.navigate(['cursos/lista-cursos'])
  }

  ngOnInit(): void {
  }

}
