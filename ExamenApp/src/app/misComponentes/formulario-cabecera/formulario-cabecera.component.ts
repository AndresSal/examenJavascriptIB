import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-formulario-cabecera',
  templateUrl: './formulario-cabecera.component.html',
  styleUrls: ['./formulario-cabecera.component.css']
})
export class FormularioCabeceraComponent implements OnInit {

  nombrePrimero = 'Primer Nombre';
  nombreSegundo = 'Segundo Nombre';
  apellidoPrimero = 'Primer Apellido';
  apellidoSegundo = 'Segundo Apellido';
  fechaNacimiento = 'Fecha de Nacimiento';
  semestreActual = 'Semestre Actual';
  graduado = '¿Es graduado?';
  constructor()
  {

  }
  ngOnInit()
  {

  }

}
