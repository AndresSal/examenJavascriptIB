import {Component, Input, OnInit} from '@angular/core';
import {Estudiante} from '../../Estudiante';

@Component({
  selector: 'app-tarjeta-informacion',
  templateUrl: './tarjeta-informacion.component.html',
  styleUrls: ['./tarjeta-informacion.component.css']
})
export class TarjetaInformacionComponent implements OnInit {

  // @Input()estudianteNombreUno: string;
  // @Input()estudianteNombreDos: string;
  // @Input()estudianteApellidoUno: string;
  // @Input()estudianteApellidoDos: string;
  // @Input()estudianteFecha: string;

  @Input () estudianteDescrito: Estudiante;
  constructor() { }

  ngOnInit() {
  }

}
