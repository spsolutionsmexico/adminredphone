import { Component, OnInit } from '@angular/core';
import { ServGraficoService } from ./serv-grafico.service;
import { GraficoDatos } from './graficodatos';
import { Grespuestas } from './grespuestas';

@Component({
  selector: 'grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
  providers: [ServGraficoService]
})
export class GraficoComponent implements OnInit {

  chartsData: GraficoDatos[]
  constructor(private chartService: ServGraficoService) {} 
  console.log('constructor Chart');
  ngOnInit() {

  	console.log('ngOnInit start');

    const _pieChartData: Array<any> = new Array();
    this.chartService
     .getDatosGrap()
     .then((chartsData: GraficoDatos[]) => {
      setTimeout( () => {


        this.chartsData =chartsData.map((graficodatos) => {  
        console.log('chartdemo: ',graficodatos.idpreguntaai); 
        console.log('chartdemo: ',graficodatos.respuestas);
        
        return chartdemo;
       });
      });
     })
     .catch((err) => console.log("Error:", err));


  };


  public pieChartLabels:string[] = ['Acuerdo', 'Acuerdo en parte', 'Desacuerdo en parte', 'Desacuerdo', 'No deseo responder'];
  public pieChartData:number[] = [100, 130, 300, 450,30];
  public pieChartType:string = 'pie';


}


