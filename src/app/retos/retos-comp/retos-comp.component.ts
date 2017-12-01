import { Component, OnInit } from '@angular/core';
import { Retos } from '../retos';
import { RetosServService } from '../retos-serv.service';

@Component({
  selector: 'retos-comp',
  templateUrl: './retos-comp.component.html',
  styleUrls: ['./retos-comp.component.css'],
  providers: [RetosServService]
})
export class RetosCompComponent implements OnInit {
  retos: Retos[]
  selectedRetos: Retos

  constructor(private retosService: RetosServService) { }

  ngOnInit() {
    this.retosService
    .getRetos().then((retos: Retos[]) => {
      this.retos = retos.map((retos) => {
        return retos;
      });
    });
  }

}
