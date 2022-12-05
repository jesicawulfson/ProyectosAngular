import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { CursoState } from 'src/app/models/curso.state';
import { Store } from '@ngrx/store';
import { editarCurso } from '../../state/curso.actions';

export const APP_DATE_FORMATS = {
  parse: {
      dateInput: 'DD-MM-YYYY',
  },
  display: {
      dateInput: 'DD-MM-YYYY',
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ]
})
export class EditarCursoComponent implements OnInit {
  formulario!: FormGroup;
  id!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<CursoState>
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.id = parseInt(parametros.get('id') || '0');
      this.formulario = new FormGroup({
        nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
        comision: new FormControl(parametros.get('comision'), [Validators.required]),
        profesor: new FormControl(parametros.get('profesor'), [Validators.required]),
        inicio: new FormControl(parametros.get('fechaInicio')),
        fin: new FormControl(parametros.get('fechaFin')),
        inscripcionAbierta: new FormControl({ disabled: false, value: parametros.get('inscripcionAbierta') ? parametros.get('inscripcionAbierta')?.toLocaleLowerCase() === 'true' : false }),
      });
    })
  }

  editarCurso() {
    let curso: Curso = {
      id: this.id,
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      profesor: this.formulario.value.profesor,
      fechaInicio: this.formulario.value.inicio,
      fechaFin: this.formulario.value.fin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    }

    this.store.dispatch(editarCurso({curso}));

    this.router.navigate(['/cursos/lista-cursos'])
  }

}
