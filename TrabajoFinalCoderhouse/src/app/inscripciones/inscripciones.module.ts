import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { ListaInscripcionesComponent } from './components/lista-inscripciones/lista-inscripciones.component';
import { inscripcionesFeatureKey, reducer } from './state/inscripcion.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { InscripcionesEffects } from './state/inscripcion.effects';
import { MaterialModule } from '../material.module';
import { AgregarInscripcionComponent } from './components/agregar-inscripcion/agregar-inscripcion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  declarations: [
    ListaInscripcionesComponent,
    AgregarInscripcionComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    StoreModule.forFeature(inscripcionesFeatureKey, reducer),
    EffectsModule.forFeature([InscripcionesEffects]),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule 
  ]
})
export class InscripcionesModule { }
