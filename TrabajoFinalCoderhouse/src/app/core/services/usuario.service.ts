import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }


  registrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${environment.api}/usuarios`, usuario) 
  }

  obtenerUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  editarUsuario(usuario: Usuario){ 
    return this.http.put<Usuario>(`${environment.api}/usuarios/${usuario.id}`, usuario);
  }
  eliminarUsuario(usuario: Usuario){
    return this.http.delete<Usuario>(`${environment.api}/usuarios/${usuario.id}`);
  } 

  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }
}
