import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SesionService } from './services/sesion.service';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MiPerfilComponent,
    ListaUsuariosComponent,
    EditarUsuarioComponent,
    DialogComponent,    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule

  ],
  providers: [
    SesionService
  ],
  exports: [
    MaterialModule,
  
  ]
})
export class CoreModule { }
