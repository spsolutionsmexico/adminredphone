import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ActualizarCompComponent }   from './actualizar/actualizar-comp/actualizar-comp.component';
import { GraficoComponent }   from './grafico/grafico.component';
import { ImagenComponent } from './imagen/imagen.component';
import { LoginComponent } from "./login/login/login.component";
import { AuthGuard } from './login/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser/src/browser';
import { NavbarComponent } from 'app/navbar/navbar.component';


const AppRoutingModule: Routes = [
  { path: '',component: LoginComponent},
  { path: 'Procesos', component: ActualizarCompComponent },
  { path: 'resultados', component: GraficoComponent },
  { path: 'imagen', component: ImagenComponent },
  { path: 'navbar', component: NavbarComponent},
  {
    path: 'Procesos',
    canActivate: [AuthGuard],
    component: ActualizarCompComponent
  }
];

export const AppRoutes = RouterModule.forRoot(AppRoutingModule);