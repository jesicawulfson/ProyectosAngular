import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, map, Observable, Subject, throwError } from 'rxjs';
import { Curso } from '../../models/curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient){
  }

  obtenerCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${environment.api}/cursos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }
  
  obtenerCurso(id: number): Observable<Curso>{
    return this.http.get<Curso>(`${environment.api}/cursos/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  agregarCurso(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(`${environment.api}/cursos/`, curso);
  }
  editarCurso(curso: Curso){ 
    return this.http.put<Curso>(`${environment.api}/cursos/${curso.id}`, curso);
  }
  eliminarCurso(curso: Curso){
    return this.http.delete<Curso>(`${environment.api}/cursos/${curso.id}`);
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
