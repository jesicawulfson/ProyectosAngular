import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditarAlumnoComponent } from './editar-alumno.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe('EditarAlumnoComponent', () => {
  let component: EditarAlumnoComponent;
  let fixture: ComponentFixture<EditarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAlumnoComponent ]
      ,
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        StoreModule
      ],
      providers: [provideMockStore({})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Crear componente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene inválido cuando no ingreso los datos obligatorios: dni, nombre, apellido y correo', () => {
    const formulario = component.formulario;
    const dni = formulario.controls['dni'];
    const nombre = formulario.controls['nombre'];
    const apellido = formulario.controls['apellido'];
    const correo = formulario.controls['correo'];
    dni.setValue('');
    nombre.setValue('');
    apellido.setValue('');
    correo.setValue('');
    expect(formulario.valid).toBeFalse();
  })

  it('El formulario es válido cuando ingreso los datos obligatorios y con formato válido: dni, nombre, apellido y correo', () => {
    //Ejemplo: cambiar dni a letras: 'test' y el e-mail también a 'test'
    const formulario = component.formulario;
    const dni = formulario.controls['dni'];
    const nombre = formulario.controls['nombre'];
    const apellido = formulario.controls['apellido'];
    const correo = formulario.controls['correo'];
    dni.setValue('12345678');
    nombre.setValue('Nombre');
    apellido.setValue('Apellido');
    correo.setValue('test@test.com');
    expect(formulario.valid).toBeTrue();
  })
});
