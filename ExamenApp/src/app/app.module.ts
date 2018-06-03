import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatInputModule} from '@angular/material/input';
import { FormularioDetalleComponent } from './misComponentes/formulario-detalle/formulario-detalle.component';
import { FormularioCabeceraComponent } from './misComponentes/formulario-cabecera/formulario-cabecera.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FormularioDetalleComponent,
    FormularioCabeceraComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
