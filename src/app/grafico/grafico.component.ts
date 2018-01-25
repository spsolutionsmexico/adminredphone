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

  public obtenerDatoGrap(): void {
    console.log("Call actualizar reto button");
    this.chartService.getDatosGrap('situacionseguridad').then((chartsData: GraficoDatos[]) => {
      this.chartsData = chartsData.map((retos) => {
        console.log('this.chartsData: ',this.chartsData);
        return retos;
      });
    });
  }


  public pieChartLabels: string[] = ['Acuerdo', 'Acuerdo en parte', 'Desacuerdo en parte', 'Desacuerdo', 'No deseo responder'];
  public pieChartData: number[] = [100, 130, 300, 450, 30];
  public pieChartType: string = 'pie';
  }


