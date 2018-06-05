import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Estudiante} from '../../Estudiante';

@Component({
  selector: 'app-seleccionador-cabecera',
  templateUrl: './seleccionador-cabecera.component.html',
  styleUrls: ['./seleccionador-cabecera.component.css']
})
export class SeleccionadorCabeceraComponent implements OnInit , OnChanges {

  @Input () elEstudianteCreado;
  miEleccion: number;
  @Output() numeroEleccion = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }
  ngOnChanges(algoCambio) {
  }

  elegirEstudiante() {
    this.miEleccion = this.elEstudianteCreado.idEstudiante;
    this.numeroEleccion.emit(this.miEleccion);
  }

}
