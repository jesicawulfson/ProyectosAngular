import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientModule, MatSnackBarModule ],
      providers: [provideMockStore({})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Crear componente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene inválido cuando no ingreso los datos obligatorios: usuario, contraseña', () => {
    const formulario = component.formulario;
    const usuario = formulario.controls['usuario'];
    const contrasena = formulario.controls['contrasena'];
    usuario.setValue('');
    contrasena.setValue('');
    expect(formulario.valid).toBeFalse();
  })

  it('El formulario es válido cuando ingreso los datos obligatorios: usuario, contraseña', () => {
    const formulario = component.formulario;
    const usuario = formulario.controls['usuario'];
    const contrasena = formulario.controls['contrasena'];
    usuario.setValue('Usuario');
    contrasena.setValue('Pass');

    expect(formulario.valid).toBeTrue();
  })
});
