import {Component, OnChanges, OnInit} from '@angular/core';
import {Estudiante} from '../../Estudiante';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  arregloEstudiantes = [];
  estudiantesEjemplo = [
    {
      nombre: 'Andres',
      apellido: 'Salazar',
      fechaNacimiento: '17/10/1995',
      esGraduado: false,
      semestreActual: 8
    },
    {
      nombre: 'Pedro',
      apellido: 'Perez',
      fechaNacimiento: '17/11/1995',
      esGraduado: false,
      semestreActual: 5
    },
    {
      nombre: 'Carlos',
      apellido: 'Salazar',
      fechaNacimiento: '17/12/1995',
      esGraduado: true,
      semestreActual: 5
    },
  ];

  recibirArregloEstudiantes($event) {
    console.log('recibi al estudiante: ', $event)
    this.arregloEstudiantes.push($event);
    alert('recibi el cambio!!');
    console.log('el arreglo es: ', this.arregloEstudiantes);
  }

  constructor() { }

  ngOnInit() {
  }
  alertar() {
    alert('¡Enhorabuena! ha creado un nuevo estudiante');
  }
}
