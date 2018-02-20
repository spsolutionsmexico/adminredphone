import { Component, OnInit } from '@angular/core';
import { ActualizarServService } from '../actualizar-serv.service';
import { RetosServService } from 'app/retos/retos-serv.service';
import { Retos } from 'app/retos/retos';

@Component({
  selector: 'actualizar-comp',
  templateUrl: './actualizar-comp.component.html',
  styleUrls: ['./actualizar-comp.component.css'],
  providers: [ActualizarServService, RetosServService]
})
export class ActualizarCompComponent implements OnInit {
  
  retos: Retos[];
  
  constructor(private actualizarservice: ActualizarServService, private retosService: RetosServService) { }

  ngOnInit() {
    this.retosService
      .getRetos().then((retos: Retos[]) => {
        this.retos = retos.map((retos) => {
          retos.fechaenvio = retos.fechaenvio.substr(0, 10);
          return retos;
        });
      });    
  }

  public actualizar(): void {
    console.log("Call actualizar button");
    this.actualizarservice.getActualizar();
  }

  public idreto: string;
  public hecho: boolean = false;

  public actualizarReto(): void {
    this.hecho = false;
    console.log("Call actualizar reto button");
    this.actualizarservice.getActualizarReto(this.idreto);
    this.hecho = true;
  }

  

}


