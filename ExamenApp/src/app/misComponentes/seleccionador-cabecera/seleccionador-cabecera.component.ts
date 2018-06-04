import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Estudiante} from '../../Estudiante';

@Component({
  selector: 'app-seleccionador-cabecera',
  templateUrl: './seleccionador-cabecera.component.html',
  styleUrls: ['./seleccionador-cabecera.component.css']
})
export class SeleccionadorCabeceraComponent implements OnInit , OnChanges {

  @Input() nombreEstudiante: string;
  @Input() apellidoEstudiante: string;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(algoCambio) {
    console.log('esto paso =>', algoCambio);
  }

}
