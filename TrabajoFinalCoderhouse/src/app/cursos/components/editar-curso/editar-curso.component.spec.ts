import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditarCursoComponent } from './editar-curso.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe('EditarCursoComponent', () => {
  let component: EditarCursoComponent;
  let fixture: ComponentFixture<EditarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCursoComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatSlideToggleModule,
        StoreModule
      ],  
      providers: [provideMockStore({})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene inválido cuando no ingreso los datos obligatorios: nombre, comision y profesor', () => {
    const formulario = component.formulario;
    const nombre = formulario.controls['nombre'];
    const comision = formulario.controls['comision'];
    const profesor = formulario.controls['profesor'];
    nombre.setValue('');
    comision.setValue('');
    profesor.setValue('');
    expect(formulario.valid).toBeFalse();
  })

  it('El formulario es válido cuando ingreso los datos obligatorios: nombre, comision y profesor', () => {
    const formulario = component.formulario;
    const nombre = formulario.controls['nombre'];
    const comision = formulario.controls['comision'];
    const profesor = formulario.controls['profesor'];
    nombre.setValue('Nombre');
    comision.setValue('Comision');
    profesor.setValue('Profesor');
    expect(formulario.valid).toBeTrue();
  })
});
