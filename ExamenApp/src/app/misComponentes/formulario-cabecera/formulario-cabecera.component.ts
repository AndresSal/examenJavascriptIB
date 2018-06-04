import {Component, Input, OnInit} from '@angular/core';

class Estudiante {
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

@Component({
  selector: 'app-formulario-cabecera',
  templateUrl: './formulario-cabecera.component.html',
  styleUrls: ['./formulario-cabecera.component.css']
})
export class FormularioCabeceraComponent implements OnInit {


  indice: number;
  nombrePrimero: string;
  nombreSegundo: string;
  apellidoPrimero: string;
  apellidoSegundo: string;
  fechaNacimiento: Date;
  semestreActual: number;
  graduado: boolean;
  goalText = 'My first life goal';

  estudiantes = [];
  constructor() { }
  ngOnInit() {
    this.indice = this.estudiantes.length;
  }
  guardarEstudiante() {
    const nuevoEstudiante = new Estudiante(this.nombrePrimero,
                                this.nombreSegundo,
                                this.apellidoPrimero,
                                this.apellidoSegundo,
                                this.fechaNacimiento,
                                this.graduado,
                                this.semestreActual);

    this.estudiantes.push(nuevoEstudiante);

    this.nombrePrimero = '';
    this.nombreSegundo = '';
    this.apellidoPrimero = '';
    this.apellidoSegundo = '';
    this.semestreActual = 0;
    this.indice = this.estudiantes.length;
  }
}
