import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Inscripcion } from 'src/app/models/inscripcion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  constructor( private http: HttpClient ) { }

  obtenerInscripciones(): Observable<Inscripcion[]>{
    return this.http.get<Inscripcion[]>(`${environment.api}/inscripciones`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  obtenerInscripcion(id: number): Observable<Inscripcion>{
    return this.http.get<Inscripcion>(`${environment.api}/inscripciones/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  agregarInscripcion(inscripcion: Inscripcion): Observable<Inscripcion>{
    return this.http.post<Inscripcion>(`${environment.api}/inscripciones/`, inscripcion);
  }
  editarInscripcion(inscripcion: Inscripcion){ 
    return this.http.put<Inscripcion>(`${environment.api}/inscripciones/${inscripcion.id}`, inscripcion);
  }
  eliminarInscripcion(inscripcion: Inscripcion){
    return this.http.delete<Inscripcion>(`${environment.api}/inscripciones/${inscripcion.id}`);
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
