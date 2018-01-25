import { Component, OnInit } from '@angular/core';
import { ServGraficoService } from './serv-grafico.service';
import { GraficoDatos } from './graficodatos';
import { Grespuestas } from './grespuestas';

@Component({
  selector: 'grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
  providers: [ServGraficoService]
})
export class GraficoComponent implements OnInit {

  chartsData: GraficoDatos[];
  constructor(private chartService: ServGraficoService) {}

  ngOnInit() {
    this.chartService.getDatosGrap()
      .then((chartsData: GraficoDatos[]) => {
        console.log('chartsData: ',chartsData);
        this.chartsData = chartsData.map((chartsData) => {
          return chartsData;
        });
      });
    }
 
  onSelect(pregunta){
    console.log('pregunta',pregunta);
    
    

  }
  public pieChartLabels: string[] = ['Acuerdo', 'Acuerdo en parte', 'Desacuerdo en parte', 'Desacuerdo', 'No deseo responder'];
  public pieChartData: number[] = [100, 130, 300, 450, 30];
  public pieChartType: string = 'pie';
  }


