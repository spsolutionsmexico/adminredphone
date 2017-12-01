import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { ActualizarCompComponent } from './actualizar/actualizar-comp/actualizar-comp.component';
import { RetosCompComponent } from './retos/retos-comp/retos-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ActualizarCompComponent,
    RetosCompComponent
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
