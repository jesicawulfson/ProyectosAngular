import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TituloEstiloDirective } from './directives/titulo-estilo.directive';
import { AppRoutingModule } from './app-routing.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { StoreModule } from '@ngrx/store';
import * as fromSesion from './core/state/sesion.reducer';
import * as fromUsuario from './core/state/usuario.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { SesionEffects } from './core/state/sesion.effects';
import { ROOT_REDUCERS } from './state/app.state';
import { CursoEffects } from './cursos/state/curso.effects';
import { AlumnoEffects } from './alumnos/state/alumno.effects';
import { UsuarioEffects } from './core/state/usuario.effects';


@NgModule({
  declarations: [
    AppComponent, 
    TituloEstiloDirective,
    NavbarComponent,
    ToolbarComponent,
    InicioComponent,
    ToolbarComponent,
    NavbarComponent,
    PaginaNoEncontradaComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,    
    BrowserAnimationsModule,
    AutenticacionModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forFeature(fromSesion.sesionFeatureKey, fromSesion.reducer),
    StoreModule.forFeature(fromUsuario.usuarioFeatureKey, fromUsuario.reducer),
    EffectsModule.forFeature([SesionEffects]),
    EffectsModule.forFeature([UsuarioEffects]),
    EffectsModule.forRoot([CursoEffects, AlumnoEffects]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
