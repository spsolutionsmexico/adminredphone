import { Component, OnInit } from '@angular/core';
import { ServImagenService } from './serv-imagen.service';
import { RespuestaDatos } from "./RespuestaDatos";

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css'],
  providers: [ServImagenService]
})
export class ImagenComponent {

  respuestaDatos: RespuestaDatos[];

  public idreto: string;

  constructor(private respuestasService : ServImagenService) {}

  public ObtenerRespuestas(): void {

    console.log('ObtenerRespuestas');
    this.respuestasService.getRespuestas(this.idreto).then((respuestaDatos: RespuestaDatos[]) => {
          this.respuestaDatos = respuestaDatos.map((respuestaDatos) => {
            return respuestaDatos;
          });
        });
    }

}

