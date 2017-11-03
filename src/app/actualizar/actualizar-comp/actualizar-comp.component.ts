import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'actualizar-comp',
  templateUrl: './actualizar-comp.component.html',
  styleUrls: ['./actualizar-comp.component.css']
})
export class ActualizarCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public actualizar(): void {
    console.log("Call actualizar button");
  }

}
