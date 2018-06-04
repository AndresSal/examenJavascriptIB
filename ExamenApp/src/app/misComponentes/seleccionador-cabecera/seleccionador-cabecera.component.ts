import {Component, Input, OnInit} from '@angular/core';
import {Estudiante} from '../../Estudiante';

@Component({
  selector: 'app-seleccionador-cabecera',
  templateUrl: './seleccionador-cabecera.component.html',
  styleUrls: ['./seleccionador-cabecera.component.css']
})
export class SeleccionadorCabeceraComponent implements OnInit {

  @Input() miListaEstudiantes = [];
  constructor() { }

  ngOnInit() {
  }

}
