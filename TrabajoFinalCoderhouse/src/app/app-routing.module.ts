import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';
import { LoginComponent } from './autenticacion/components/login/login.component';
import { MiPerfilComponent } from './core/components/mi-perfil/mi-perfil.component';
import { RegistroComponent } from './autenticacion/components/registro/registro.component';
import { ListaUsuariosComponent } from './core/components/lista-usuarios/lista-usuarios.component';
import { AdminGuard } from './core/guards/admin.guard';


const rutas: Routes = [
  {path: 'autenticacion/login', component: LoginComponent },
  { 
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule),
    canActivate: [AutenticacionGuard]
  },
  { 
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then((m) => m.AlumnosModule),
    canActivate: [AutenticacionGuard]
  },
  { 
    path: 'inscripciones',
    loadChildren: () => import('./inscripciones/inscripciones.module').then((m) => m.InscripcionesModule),
    canActivate: [AutenticacionGuard]
  },
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component:InicioComponent, canActivate: [AutenticacionGuard]},
  {path: 'usuarios', component:ListaUsuariosComponent, canActivate: [AdminGuard]},
  {path: 'mi-perfil', component:MiPerfilComponent, canActivate: [AutenticacionGuard]},
  {path: 'registro', component:RegistroComponent},
  {path: '**', component:PaginaNoEncontradaComponent},
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
