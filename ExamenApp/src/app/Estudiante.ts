export class Estudiante {
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  fechaNacimiento: Date;
  graduado: boolean;
  semestreActual: number;

  constructor (nombreUno: string,
               nombreDos: string,
               apellidoUno: string,
               apellidoDos: string,
               fechaNacimiento: Date,
               graduado: boolean,
               semestreActual: number) {
    this.primerNombre = nombreUno;
    this.segundoNombre = nombreDos;
    this.primerApellido = apellidoUno;
    this.segundoApellido = apellidoDos;
    this.fechaNacimiento = fechaNacimiento;
    this.graduado = graduado;
    this.semestreActual = semestreActual;
  }
}
