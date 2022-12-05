import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AutenticacionGuard } from '../core/guards/autenticacion.guard';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';

const rutas: Routes = [
  { path: '', component: CursosInicioComponent, canActivate: [AutenticacionGuard], children: [
    { path: 'lista-cursos', component: ListaCursosComponent },
    { path: 'editar', component: EditarCursoComponent , canActivate: [AdminGuard]},
    { path: 'agregar', component: AgregarCursoComponent, canActivate: [AdminGuard]},
  ]} 
]; 

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
