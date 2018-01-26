import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ActualizarCompComponent }   from './actualizar/actualizar-comp/actualizar-comp.component';
import { GraficoComponent }   from './grafico/grafico.component';


const routes: Routes = [
  { path: '', redirectTo: 'resultados', pathMatch: 'full' },
  { path: 'Procesos', component:  ActualizarCompComponent },
  { path: 'resultados', component: GraficoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}