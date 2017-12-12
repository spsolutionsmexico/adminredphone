import { Component, OnInit } from '@angular/core';
import { Retos } from '../retos';
import { RetosServService } from '../retos-serv.service';
import{RetosPreguntaComponent} from'../retos-pregunta/retos-pregunta.component'

@Component({
  selector: 'retos-comp',
  templateUrl: './retos-comp.component.html',
  styleUrls: ['./retos-comp.component.css'],
  providers: [RetosServService]
})
export class RetosCompComponent implements OnInit {
  retos: Retos[]
  selectedReto: Retos
  selectedRP:String

  private retospregunta:RetosPreguntaComponent

  constructor(private retosService: RetosServService) { }

  ngOnInit() {
    this.retosService
    .getRetos().then((retos: Retos[]) => {
      this.retos = retos.map((retos) => {
        retos.fechaenvio=retos.fechaenvio.substr(0, 10);
        return retos;
      });
    });
  }

  selectReto(reto: Retos) {
    this.selectedReto = reto
  }

  selectRespuestas(reto: Retos) {
    this.selectedRP = reto.idreto
  }
}
