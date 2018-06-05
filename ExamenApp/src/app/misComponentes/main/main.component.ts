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
  indicador = false;
  identificador = 0;

  recibirArregloEstudiantes($event) {
    console.log('recibi al estudiante: ', $event);
    this.arregloEstudiantes.push($event);
    alert('¡Enhorabuena! ha creado un nuevo estudiante');
    console.log('el arreglo es: ', this.arregloEstudiantes);
  }

  recibirEleccion($event) {
    const idEleccion = $event;
    console.log('recibo de nuevo: ', idEleccion);
    // this.estudianteElegido = this.arregloEstudiantes.reduce(estudiante => estudiante.idEstudiante === idEleccion);
    this.estudianteElegido = this.arregloEstudiantes[idEleccion - 1];
    console.log('haz escogido al estudiante', this.estudianteElegido);
  }

  reciboMateria($event) {
    this.materiaNueva = $event;
    console.log('recibí la materia ', this.materiaNueva);
    this.estudianteElegido.misMaterias.push(this.materiaNueva);
    this.indicador = true;
    console.log('ahora mi estudiante tiene la siguiente info: ', this.estudianteElegido);
  }



  constructor() { }

  ngOnInit() {
  }
}
