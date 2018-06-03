import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-detalle',
  templateUrl: './formulario-detalle.component.html',
  styleUrls: ['./formulario-detalle.component.css']
})
export class FormularioDetalleComponent implements OnInit {

  nombreMateria = 'Nombre de Materia';
  codigo = 'Código de Materia';
  descripcion = 'Descripción de Materia';
  esActivo = '¿Está activa la materia?';
  fechaCreacion = 'Fecha de Creación';
  numeroHorasPorSemana = 'Número de horas por semana';
  estudianteId = 'ID de Estudiante';
  constructor() { }

  ngOnInit() {
  }

}
