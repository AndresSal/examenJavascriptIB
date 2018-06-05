import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabla-principal',
  templateUrl: './tabla-principal.component.html',
  styleUrls: ['./tabla-principal.component.css']
})
export class TablaPrincipalComponent implements OnInit, OnChanges{
  @Input () estudianteQuiereDetalle;
  detallesEstudiantes = [];
  @Input() bandera;
  constructor() { }
  ngOnInit() {
    // this.mostrarDetalleMaterias();
  }

  ngOnChanges () {
    this.detallesEstudiantes = this.estudianteQuiereDetalle.misMaterias;
  }

  // mostrarDetalleMaterias() {
  //   if (this.bandera === true) {
  //     this.detallesEstudiantes = this.estudianteQuiereDetalle.misMaterias;
  //     this.bandera = false;
  //   }
  // }
}
