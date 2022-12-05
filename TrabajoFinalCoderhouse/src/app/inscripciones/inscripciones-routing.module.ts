import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AutenticacionGuard } from '../core/guards/autenticacion.guard';
import { AgregarInscripcionComponent } from './components/agregar-inscripcion/agregar-inscripcion.component';
import { ListaInscripcionesComponent } from './components/lista-inscripciones/lista-inscripciones.component';

const routes: Routes = [
  { path: '', canActivate: [AutenticacionGuard], children: [
    { path: 'lista', component: ListaInscripcionesComponent }, 
    { path: 'agregar', component: AgregarInscripcionComponent, canActivate: [AdminGuard]},
  ]} 
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
