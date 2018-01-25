import { Component, Input } from '@angular/core';
import { ServGraficoService } from './serv-grafico.service';
import { GraficoDatos } from './graficodatos';

@Component({
  selector: 'grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
  providers: [ServGraficoService]
})
export class GraficoComponent {
  chartsData: GraficoDatos[]
  constructor(private chartService: ServGraficoService) {}

  public idpreguntaai: string;
  public pieChartLabels: string[]; //= ['Acuerdo', 'Acuerdo en parte', 'Desacuerdo en parte', 'Desacuerdo', 'No deseo responder'];
  public pieChartData: number[]; //= [100, 130, 300, 450, 30];
  public pieChartType: string = 'pie';
  public verGraf=false;
  _pieChartData: Array<any> = new Array();
  _pieChartLabels: Array<any> = new Array();

  public obtenerDatoGrap(): void {
    console.log("Call actualizar reto button");
    this.chartService.getDatosGrap('situacionseguridad').then((chartsData: GraficoDatos[]) => {
      this.chartsData = chartsData.map((chartsData) => {
        console.log('this.chartsData: ',chartsData.respuesta);
        this.pieChartLabels.push(chartsData.respuesta);
        console.log('this.chartsData: ',chartsData.rep);
        this.pieChartData.push(chartsData.rep);
        this._pieChartData=this.pieChartData;
        this._pieChartLabels=this._pieChartLabels;
        this.verGraf=true;
        return chartsData;
      });
    });
  }
  
  }


