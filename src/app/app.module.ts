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
<<<<<<< HEAD
import { HeaderComponent } from './header/header/header.component';
import { GraficoComponent } from './grafico/grafico.component';
import { ProcesosComponent } from './procesos/procesos.component';
=======
>>>>>>> parent of d080179... Modify Views

@NgModule({
  declarations: [
    AppComponent,
    ActualizarCompComponent,
    RetosCompComponent,
    RetoDetalleComponent,
<<<<<<< HEAD
    RetosPreguntaComponent,
    HeaderComponent,
    GraficoComponent,
    ProcesosComponent
=======
    RetosPreguntaComponent
>>>>>>> parent of d080179... Modify Views
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
