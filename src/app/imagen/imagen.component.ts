import { Component, OnInit } from '@angular/core';
import { ServImagenService } from './serv-imagen.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent {

  constructor(private respuestasService : ServImagenService) {}

  public ObtenerRespuestas(): void {
    console.log('ObtenerRespuestas');
    this.respuestasService.getRespuestas();

}


}
