import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  public pieChartLabels:string[] = ['Acuerdo', 'Acuerdo en parte', 'Desacuerdo en parte', 'Desacuerdo', 'No deseo responder'];
  public pieChartData:number[] = [100, 130, 300, 450,30];
  public pieChartType:string = 'pie';


}

