import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
/*
  chartsdata: ChartData[]
  selectedchardata: ChartData
  constructor(private chartService: GraficoComponent) { 
    console.log('constructor inChartComponent');*/
   }
  constructor() { }

  ngOnInit() {
/*
	console.log('ngOnInit start');
    const _pieChartData: Array<any> = new Array();
    //const _pieChartLabels: Array<any> = new Array();
    this.chartService
     .getData()
     .then((charts: Chart[]) => {
      setTimeout( () => {
        this.chartsdata =chartsdemo.map((ChartData) => {  
        console.log('chartdemo: ',ChartData.porciento); 
        console.log('chartdemo: ',ChartData.nombre);
        _pieChartData.push(chartdemo.porciento);
        //_pieChartLabels.push(chartdemo.nombre);
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
*/
  }


  public pieChartLabels:string[] = ['Acuerdo', 'Acuerdo en parte', 'Desacuerdo en parte', 'Desacuerdo', 'No deseo responder'];
  public pieChartData:number[] = [100, 130, 300, 450,30];
  public pieChartType:string = 'pie';


}

