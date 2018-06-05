import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Materia} from '../../Materia';

@Component({
  selector: 'app-formulario-detalle',
  templateUrl: './formulario-detalle.component.html',
  styleUrls: ['./formulario-detalle.component.css']
})
export class FormularioDetalleComponent implements OnInit {

  indiceMateria: number;
  nombreMateria: string;
  codigo: string;
  descripcion: string;
  esActivo = false;
  fechaCreacion: Date;
  numeroHorasPorSemana: number;
  materiasGeneradas = [];

  @Input() idDeMiEstudiante: number;
  @Output () enviarAlMain = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.indiceMateria = this.materiasGeneradas.length;
  }

  generarRegistroMateria () {
    const nuevaMateria = new Materia(this.indiceMateria + 1,
                                      this.nombreMateria,
                                      this.codigo,
                                      this.descripcion,
                                      this.esActivo,
                                      this.fechaCreacion,
                                      this.numeroHorasPorSemana
                                      );
    this.materiasGeneradas.push(nuevaMateria);
    this.enviarAlMain.emit(nuevaMateria);
    console.log('acabe de enviar la materia', nuevaMateria, 'al main');
    this.indiceMateria = this.materiasGeneradas.length;
  }

}
