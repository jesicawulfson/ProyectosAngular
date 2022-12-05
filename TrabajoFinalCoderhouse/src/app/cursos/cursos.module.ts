import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';
import { StoreModule } from '@ngrx/store';
import { cursosFeatureKey, reducer } from '../cursos/state/curso.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CursoEffects } from './state/curso.effects';
import { DialogComponent } from './components/dialog/dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AgregarCursoComponent,
    EditarCursoComponent,
    ListaCursosComponent,
    CursosInicioComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(cursosFeatureKey, reducer),
    EffectsModule.forFeature([CursoEffects]),
    SharedModule
  ],
  exports: [
  ]
})
export class CursosModule { }
