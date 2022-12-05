import { Injectable } from '@angular/core';
import { Sesion } from 'src/app/models/sesion';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  sesionSubject!: BehaviorSubject<Sesion>;

  constructor(
    private http: HttpClient
  ) { }

  login(usuario: string, contrasena: string): Observable<Usuario>{
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`).pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.filter((u: Usuario) => u.usuario === usuario && u.contrasena === contrasena)[0]
      })
    );
  }

  registrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${environment.api}/usuarios`, usuario) 
  }
}
