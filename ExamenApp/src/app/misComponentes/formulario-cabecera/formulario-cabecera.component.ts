import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-formulario-cabecera',
  templateUrl: './formulario-cabecera.component.html',
  styleUrls: ['./formulario-cabecera.component.css']
})
export class FormularioCabeceraComponent implements OnInit {

  indice: number;
  nombrePrimero = 'Primer Nombre';
  nombreSegundo = 'Segundo Nombre';
  apellidoPrimero = 'Primer Apellido';
  apellidoSegundo = 'Segundo Apellido';
  fechaNacimiento = 'Fecha de Nacimiento';
  semestreActual = 'Semestre Actual';
  graduado = '¿Es graduado?';
  goalText = 'My first life goal';
  estudiantes = [];
  constructor() { }
  ngOnInit() {
    this.indice = this.estudiantes.length;
  }
  guardarEstudiante() {
    this.estudiantes.push(this.nombrePrimero);
    this.nombrePrimero = '';
    this.indice = this.estudiantes.length;
  }
}
