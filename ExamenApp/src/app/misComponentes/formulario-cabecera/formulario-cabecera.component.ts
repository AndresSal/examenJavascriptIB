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

  // @Output() dioClickEnCrear: EventEmitter<boolean> = new EventEmitter();
  @Output() salidaEstudiante = new EventEmitter();
  listaEstudiantesCreados = [];

  constructor() { }
  ngOnInit() {
    this.indice = this.listaEstudiantesCreados.length;
  }
  guardarEstudiante() {
    const lasMaterias = [];
    const estudiante = new Estudiante  (this.indice + 1,
                                        this.nombrePrimero,
                                        this.nombreSegundo,
                                        this.apellidoPrimero,
                                        this.apellidoSegundo,
                                        this.fechaNac,
                                        this.graduado,
                                        this.semestreActual,
                                        lasMaterias);

    this.listaEstudiantesCreados.push(estudiante);
    console.log(this.listaEstudiantesCreados[this.indice]);
    this.enviar(estudiante);
    // this.dioClickEnCrear.emit(true);
    this.nombrePrimero = '';
    this.nombreSegundo = '';
    this.apellidoPrimero = '';
    this.apellidoSegundo = '';
    this.indice = this.listaEstudiantesCreados.length;
  }

  enviar(estudianteCreado: Estudiante) {
    console.log('emitiendo informacion');
    this.salidaEstudiante.emit(estudianteCreado);
  }

}
