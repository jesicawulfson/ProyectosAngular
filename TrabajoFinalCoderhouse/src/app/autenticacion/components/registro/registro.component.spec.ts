import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatSlideToggleModule,
        StoreModule,
        MatSnackBarModule
      ],  
      providers: [provideMockStore({})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Crear componente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene inválido cuando no ingreso los datos obligatorios: usuario, contraseña, repite contraseña', () => {
    const formulario = component.formulario;
    const usuario = formulario.controls['usuario'];
    const contrasena = formulario.controls['contrasena'];
    const repitecontrasena = formulario.controls['repitecontrasena'];
    usuario.setValue('');
    contrasena.setValue('');
    repitecontrasena.setValue('');
    expect(formulario.valid).toBeFalse();
  })

  it('El formulario es válido cuando ingreso los datos obligatorios: usuario, contraseña, repite contraseña', () => {
    const formulario = component.formulario;
    const usuario = formulario.controls['usuario'];
    const contrasena = formulario.controls['contrasena'];
    const repitecontrasena = formulario.controls['repitecontrasena'];
    usuario.setValue('Usuario');
    contrasena.setValue('Pass');
    repitecontrasena.setValue('Pass');
    expect(formulario.valid).toBeTrue();
  })
});
