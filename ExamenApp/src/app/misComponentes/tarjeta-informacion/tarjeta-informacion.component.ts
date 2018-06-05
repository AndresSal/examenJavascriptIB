import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Estudiante} from '../../Estudiante';

@Component({
  selector: 'app-tarjeta-informacion',
  templateUrl: './tarjeta-informacion.component.html',
  styleUrls: ['./tarjeta-informacion.component.css']
})
export class TarjetaInformacionComponent implements OnInit , OnChanges {

  @Input () estudianteRecibido: Estudiante;
  estudianteDescrito: Estudiante;
  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(cambiosRealizados): void {
    console.log('cambios en la tarjeta => ', cambiosRealizados);
    this.estudianteDescrito = this.estudianteRecibido;
  }

}
