//import { Component, OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Retos } from '../retos';
import { Pregunta } from '../pregunta';
import { RetosServService } from '../retos-serv.service';
//import {PreguntaServService} from '../pregunta-serv.service';

@Component({
  selector: 'retos-pregunta',
  templateUrl: './retos-pregunta.component.html',
  styleUrls: ['./retos-pregunta.component.css'],
  providers: [RetosServService]
})
export class RetosPreguntaComponent {//implements OnInit {
  preguntas: Pregunta[]
  selectedPregunta: Pregunta

  @Input()
  reto: Retos;

  constructor(private retosService: RetosServService) {}

  /*cargarpreguntas (idreto){
    this.retosService.getPreguntas(idreto).then((preguntas: Pregunta[]) => {
      this.preguntas = preguntas.map((preguntas) => {
        return preguntas;
      });
    });
   }*/
  /*ngOnInit() {
  }*/

}
