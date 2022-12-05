import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgregarAlumnoComponent } from './agregar-alumno.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';

describe('AgregarAlumnoComponent', () => {
  let component: AgregarAlumnoComponent;
  let fixture: ComponentFixture<AgregarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAlumnoComponent ]
      ,
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [provideMockStore({})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAlumnoComponent);
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
