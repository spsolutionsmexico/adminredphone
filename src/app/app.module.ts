import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { ActualizarCompComponent } from './actualizar/actualizar-comp/actualizar-comp.component';
import { RetosCompComponent } from './retos/retos-comp/retos-comp.component';
import { RetoDetalleComponent } from './retos/reto-detalle/reto-detalle.component';
import { RetosPreguntaComponent } from './retos/retos-pregunta/retos-pregunta.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficoComponent } from './grafico/grafico.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ActualizarCompComponent,
    RetosCompComponent,
    RetoDetalleComponent,
    RetosPreguntaComponent,
    NavbarComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
