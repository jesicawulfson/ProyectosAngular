import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoState } from 'src/app/models/alumno.state';
import { agregarAlumno } from '../../state/alumno.actions';


@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private store: Store<AlumnoState>,
    private router: Router
  ) { 
    this.formulario = fb.group({
      dni: new FormControl('', [Validators.pattern('^[0-9]{8}$'), Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$'), Validators.required]),
      fechanacimiento: new FormControl(new Date()), // Current Date
      genero: new FormControl()
    });
  }

  ngOnInit(): void {
  }
  
  agregarAlumno(){
    const alumno: Alumno = {
      id: Math.round(Math.random()*1000),
      dni: this.formulario.value.dni,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      fechanacimiento: this.formulario.value.fechanacimiento.toISOString().slice(0, 10),
      genero: this.formulario.value.genero,
      correo: this.formulario.value.correo
    }
    this.store.dispatch(agregarAlumno({alumno}));
    this.router.navigate(['/alumnos/lista-alumnos'])
  }
  
}
