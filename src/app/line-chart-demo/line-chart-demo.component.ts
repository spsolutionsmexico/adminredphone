import { Component, OnInit } from '@angular/core';
import { ChartDemo } from './chart-demo';
import { ChartDemoService } from './chart-demo.service';

@Component({
  selector: 'line-chart-demo',
  templateUrl: './line-chart-demo.component.html',
  styleUrls: ['./line-chart-demo.component.css'],
  providers: [ChartDemoService]
})
export class LineChartDemoComponent implements OnInit {
  
  chartsdemo: ChartDemo[]
  selectedchardemo: ChartDemo
  constructor(private chartdemoService: ChartDemoService) { 
    console.log('constructor ineChartDemoComponent');
   }

  ngOnInit() {
    console.log('ngOnInit start');
    const _pieChartData: Array<any> = new Array();
    //const _pieChartLabels: Array<any> = new Array();
    this.chartdemoService
     .getChatDemoData()
     .then((chartsdemo: ChartDemo[]) => {
      setTimeout( () => {
        this.chartsdemo =chartsdemo.map((chartdemo) => {  
        console.log('chartdemo: ',chartdemo.porciento); 
        console.log('chartdemo: ',chartdemo.nombre);
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
 }
 
 public pieChartData:Array<any> = [];
 public pieChartLabels:Array<any> = [];
 public pieChartType:string = 'pie';
 public pieChartColor: Array<any> = [
  {
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(0, 255, 0, 0.2)',
      'rgba(102, 0, 204, 0.2)',
      'rgba(255, 128, 0, 0.2)'
    ]
  }];
 /*[
  { // grey
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  { // dark grey
    backgroundColor: 'rgba(77,83,96,0.2)',
    borderColor: 'rgba(77,83,96,1)',
    pointBackgroundColor: 'rgba(77,83,96,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(77,83,96,1)'
  },
  { // grey
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  { // dark grey
    backgroundColor: 'rgba(77,83,96,0.2)',
    borderColor: 'rgba(77,83,96,1)',
    pointBackgroundColor: 'rgba(77,83,96,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(77,83,96,1)'
  }
];*/

 public chartClicked(e:any):void {
   console.log(e);
 }
 
 public chartHovered(e:any):void {
   console.log(e);
 }
}
/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'line-chart-demo',
  templateUrl: './line-chart-demo.component.html',
  styleUrls: ['./line-chart-demo.component.css']
})

export class LineChartDemoComponent {
  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}*/