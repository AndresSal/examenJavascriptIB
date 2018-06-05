import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabla-principal',
  templateUrl: './tabla-principal.component.html',
  styleUrls: ['./tabla-principal.component.css']
})
export class TablaPrincipalComponent implements OnInit , OnChanges{

  @Input () arregloPrincipal: Array<any>;
  miColeccion: Array<any>;
  constructor() { }

  ngOnChanges(cambiosRealizados): void {
    console.log('cambios en la tarjeta => ', cambiosRealizados);
    this.miColeccion = this.arregloPrincipal;
  }
  ngOnInit() {
  }



}
