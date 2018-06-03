import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioDetalleComponent } from './misComponentes/formulario-detalle/formulario-detalle.component';
import { FormularioCabeceraComponent } from './misComponentes/formulario-cabecera/formulario-cabecera.component';
import {MatButtonModule, MatNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { TarjetaInformacionComponent } from './misComponentes/tarjeta-informacion/tarjeta-informacion.component';
import {CardModule} from 'primeng/card';
@NgModule({
  declarations: [
    AppComponent,
    FormularioDetalleComponent,
    FormularioCabeceraComponent,
    TarjetaInformacionComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    InputTextModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
