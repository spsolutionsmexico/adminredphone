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
import { AppRoutes } from './app-routing.module';
import { ImagenComponent } from './imagen/imagen.component';
import { LoginComponent } from './login/login/login.component';
import { AuthService } from "./login/auth.service";
import { AuthGuard } from "./login/auth-guard.service";
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    ActualizarCompComponent,
    RetosCompComponent,
    RetoDetalleComponent,
    RetosPreguntaComponent,
    NavbarComponent,
    GraficoComponent,
    ImagenComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    AppRoutes,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
