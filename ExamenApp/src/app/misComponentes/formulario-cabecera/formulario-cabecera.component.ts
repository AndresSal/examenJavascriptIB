import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Estudiante} from '../../Estudiante';

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
  fechaNac: Date;
  semestreActual: number;
  graduado: boolean;

  @Output() dioClickEnCrear: EventEmitter<boolean> = new EventEmitter();
  @Output() salidaEstudiante: EventEmitter<any> = new EventEmitter<any>();
  listaEstudiantesCreados = [];

  constructor() { }
  ngOnInit() {
    this.indice = this.listaEstudiantesCreados.length;
  }
  guardarEstudiante() {
    const estudiante = new Estudiante  (this.nombrePrimero,
                                        this.nombreSegundo,
                                        this.apellidoPrimero,
                                        this.apellidoSegundo,
                                        this.fechaNac,
                                        this.graduado,
                                        this.semestreActual);

    this.listaEstudiantesCreados.push(estudiante);
    this.dioClickEnCrear.emit(true);
    this.salidaEstudiante.emit(this.listaEstudiantesCreados);
    this.nombrePrimero = '';
    this.nombreSegundo = '';
    this.apellidoPrimero = '';
    this.apellidoSegundo = '';
    this.indice = this.listaEstudiantesCreados.length;
  }
}
