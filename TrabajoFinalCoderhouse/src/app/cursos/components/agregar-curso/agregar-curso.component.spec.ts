import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgregarCursoComponent } from './agregar-curso.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { provideMockStore } from '@ngrx/store/testing';

describe('AgregarCursoComponent', () => {
  let component: AgregarCursoComponent;
  let fixture: ComponentFixture<AgregarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCursoComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSlideToggleModule
      ],  
      providers: [provideMockStore({})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene inválido cuando no ingreso el nombre del curso', () => {
    const formulario = component.formulario;
    const nombre = formulario.controls['nombre'];
    nombre.setValue('');
    expect(formulario.valid).toBeFalse();
  })

  it('El formulario es válido cuando ingreso el nombre del curso', () => {
    const formulario = component.formulario;
    const nombre = formulario.controls['nombre'];
    nombre.setValue('Test');
    expect(formulario.valid).toBeTrue();
  })
});
