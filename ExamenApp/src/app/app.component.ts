import {Component, Input, OnChanges} from '@angular/core';
import {Estudiante} from './Estudiante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges {
  @Input() arregloEstudiantes: Estudiante[];
  ngOnChanges(algoCambio) {
    console.log('algo ->', algoCambio);
  }
  alertar() {
    alert('¡Enhorabuena! ha creado un nuevo estudiante');
  }
}
