import { Alumno } from "./alumno";
import { Curso } from "./curso";

export interface Inscripcion {
    id: number,
    alumno: Alumno,
    curso: Curso
}