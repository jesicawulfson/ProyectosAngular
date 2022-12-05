import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooleanATextoPipe } from '../pipes/boolean-a-texto.pipe';
import { BooleanoEstiloDirective } from '../directives/booleano-estilo.directive';



@NgModule({
  declarations: [    
    BooleanATextoPipe,
    BooleanoEstiloDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    BooleanATextoPipe,
    BooleanoEstiloDirective,
  ]
})
export class SharedModule { }
