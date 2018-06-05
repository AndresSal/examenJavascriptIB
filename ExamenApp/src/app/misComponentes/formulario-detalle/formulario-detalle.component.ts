import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-detalle',
  templateUrl: './formulario-detalle.component.html',
  styleUrls: ['./formulario-detalle.component.css']
})
export class FormularioDetalleComponent implements OnInit {

  nombreMateria: string;
  codigo: string;
  descripcion: string;
  esActivo: boolean;
  fechaCreacion: Date;
  numeroHorasPorSemana: number;
  estudianteId: number;
  constructor() { }

  ngOnInit() {
  }

}
