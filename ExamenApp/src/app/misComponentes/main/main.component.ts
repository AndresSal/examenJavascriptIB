import {Component, OnChanges, OnInit} from '@angular/core';
import {Estudiante} from '../../Estudiante';
import {Materia} from '../../Materia';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  arregloEstudiantes = [];
  estudianteElegido: Estudiante;
  materiaNueva: Materia;
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
    console.log('recibi al estudiante: ', $event);
    this.arregloEstudiantes.push($event);
    alert('recibi el cambio!!');
    console.log('el arreglo es: ', this.arregloEstudiantes);
  }

  recibirEleccion($event) {
    const idEleccion = $event;
    console.log('recibo de nuevo: ', idEleccion);
    this.estudianteElegido = this.arregloEstudiantes[idEleccion - 1];
    console.log('haz escogido al estudiante', this.estudianteElegido);
  }

  reciboMateria($event) {
    this.materiaNueva = $event;
    console.log('recibí la materia ', this.materiaNueva);
  }

  constructor() { }

  ngOnInit() {
  }
  alertar() {
    alert('¡Enhorabuena! ha creado un nuevo estudiante');
  }
}
