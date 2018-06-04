export class Estudiante {
  constructor (
    public primerNombre?: string,
    public segundoNombre?: string,
    public primerApellido?: string,
    public segundoApellido?: string,
    public fechaNacimiento?: Date,
    public graduado?: boolean,
    public semestreActual?: number
  ) { }
}
