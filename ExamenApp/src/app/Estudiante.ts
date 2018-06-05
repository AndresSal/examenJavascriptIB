import {Materia} from './Materia';

export class Estudiante {
  constructor (
    public idEstudiante?: number,
    public primerNombre?: string,
    public segundoNombre?: string,
    public primerApellido?: string,
    public segundoApellido?: string,
    public fechaNacimiento?: Date,
    public graduado?: boolean,
    public semestreActual?: number,
    public misMaterias?: Array<any>
  ) { }
}
