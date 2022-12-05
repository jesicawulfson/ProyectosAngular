import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarInscripcionComponent } from './agregar-inscripcion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AgregarInscripcionComponent', () => {
  let component: AgregarInscripcionComponent;
  let fixture: ComponentFixture<AgregarInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarInscripcionComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatSlideToggleModule,
        StoreModule,
        MatSelectModule,
        BrowserAnimationsModule
      ],
      providers: [provideMockStore({})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Crear componente', () => {
    expect(component).toBeTruthy();
  });
  
  it('El formulario se mantiene inválido cuando no ingreso los datos obligatorios: alumnos, cursos', () => {
    const formulario = component.formulario;
    const alumnos = formulario.controls['alumnos'];
    const cursos = formulario.controls['cursos'];
    alumnos.setValue('');
    cursos.setValue('');
    expect(formulario.valid).toBeFalse();
  })

  it('El formulario es válido cuando ingreso los datos obligatorios: alumnos, cursos', () => {
    //Ejemplo: cambiar dni a letras: 'test' y el e-mail también a 'test'
    const formulario = component.formulario;
    const alumnos = formulario.controls['alumnos'];
    const cursos = formulario.controls['cursos'];
    alumnos.setValue('Alumno');
    cursos.setValue('Nombre');

    expect(formulario.valid).toBeTrue();
  })
});
