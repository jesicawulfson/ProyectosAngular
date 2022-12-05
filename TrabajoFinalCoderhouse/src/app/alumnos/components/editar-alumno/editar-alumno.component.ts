import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { AlumnoState } from 'src/app/models/alumno.state';
import { Store } from '@ngrx/store';
import { editarAlumno } from '../../state/alumno.actions';

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
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
]
})
export class EditarAlumnoComponent implements OnInit {

  model:any;
  id!: number;
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private store: Store<AlumnoState>,
    private router: Router
  ) 
  {
    this.formulario = fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$'), Validators.required]),
    });
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.id = parseInt(parametros.get('id') || '0');
      this.formulario = new FormGroup({
        dni: new FormControl(parametros.get('dni'), [Validators.required]),
        nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
        apellido: new FormControl(parametros.get('apellido')),
        edad: new FormControl(parametros.get('edad')),
        fechanacimiento: new FormControl({ disabled: false, value: parametros.get('fechanacimiento') }),
        genero: new FormControl({ disabled: false, value: parametros.get('genero') }),
        correo: new FormControl(parametros.get('correo')),
      });
    })
  }
  editarAlumno() {
    let alumno: Alumno = {
      id: this.id,
      dni: this.formulario.value.dni,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      fechanacimiento: this.formulario.value.fechanacimiento,
      genero: this.formulario.value.genero,
      correo: this.formulario.value.correo
    }

    this.store.dispatch(editarAlumno({alumno}));

    this.router.navigate(['/alumnos/lista-alumnos'])
  }

}
