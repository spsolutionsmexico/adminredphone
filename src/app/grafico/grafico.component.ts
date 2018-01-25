import { Component, OnInit } from '@angular/core';
import { ServGraficoService } from ./serv-grafico.service

@Component({
  selector: 'grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
  providers: [ServGraficoService]
})
export class GraficoComponent implements OnInit {

  chartsData: GraficoDatos[]
  constructor(private chartService: ServGraficoService) { 
  console.log('constructor Chart');
  ngOnInit() {

  	console.log('ngOnInit start');
    const _pieChartData: Array<any> = new Array();
    this.chartService
     .getDatosGrap()
     .then((chartsData: GraficoDatos[]) => {
      setTimeout( () => {

      	console.log(GraficoDatos);
        this.chartsData =chartsData.map((chartdemo) => {  
        console.log('chartdemo: ',chartdemo.porciento); 
        console.log('chartdemo: ',chartdemo.nombre);
        _pieChartData.push(chartdemo.porciento);
        this.pieChartData=_pieChartData;
        this.pieChartLabels.push(chartdemo.nombre);
        console.log('this.pieChartData.length: ',this.pieChartData.length);
        console.log('this.pieChartLabels.length: ',this.pieChartLabels.length);
        console.log('this.pieChartLabels',this.pieChartLabels);
        return chartdemo;
       });
      });
     })
     .catch((err) => console.log("Error:", err));


  }



}

