import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Estudiante} from '../../Estudiante';

@Component({
  selector: 'app-seleccionador-cabecera',
  templateUrl: './seleccionador-cabecera.component.html',
  styleUrls: ['./seleccionador-cabecera.component.css']
})
export class SeleccionadorCabeceraComponent implements OnInit , OnChanges {

  @Input() nombreEstudiante: string;
  @Input() apellidoEstudiante: string;
  @Input() idEstudiante: number;
  miEleccion: number;

  @Output() numeroEleccion = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }
  ngOnChanges(algoCambio) {
    console.log('esto paso =>', algoCambio);
  }

  elegirEstudiante() {
    this.miEleccion = this.idEstudiante;
    this.numeroEleccion.emit(this.miEleccion);
  }

}
