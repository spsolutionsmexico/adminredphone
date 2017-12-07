import { Component, Input } from '@angular/core';
import { Retos } from '../retos';
import { RetosServService } from '../retos-serv.service';

@Component({
  selector: 'reto-detalle',
  templateUrl: './reto-detalle.component.html',
  styleUrls: ['./reto-detalle.component.css']
})
export class RetoDetalleComponent {//implements OnInit {
  @Input()
  reto: Retos;

  constructor(private retosService: RetosServService) { }

}
