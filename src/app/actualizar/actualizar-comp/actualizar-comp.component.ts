import { Component, OnInit } from '@angular/core';
import { ActualizarServService } from '../actualizar-serv.service';

@Component({
  selector: 'actualizar-comp',
  templateUrl: './actualizar-comp.component.html',
  styleUrls: ['./actualizar-comp.component.css'],
  providers: [ActualizarServService]
})
export class ActualizarCompComponent implements OnInit {

  constructor(private actualizarservice: ActualizarServService) { }

  ngOnInit() {
  }

  public actualizar(): void {
    console.log("Call actualizar button");
    this.actualizarservice.getActualizar();
  }

  public idreto: string;
  public actualizarReto(): void {
    console.log("Call actualizar reto button");
    this.actualizarservice.getActualizarReto(this.idreto);
  }
  

}
