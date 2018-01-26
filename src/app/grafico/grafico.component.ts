import { Component, Input } from '@angular/core';
import { ServGraficoService } from './serv-grafico.service';
import { GraficoDatos } from './graficodatos';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
  providers: [ServGraficoService]
})

export class GraficoComponent {
  chartsData: GraficoDatos[]
  constructor(private chartService: ServGraficoService) {}
  public idpregunta: string  = '0'; // Iniciamos
  public verSeleccion: string;

  public idpreguntaai: string;
  public pieChartLabels:Array<any> = new Array(); //string[]; //= ['Acuerdo', 'Acuerdo en parte', 'Desacuerdo en parte', 'Desacuerdo', 'No deseo responder'];
  public pieChartData:Array<any> = new Array(); //number[]; //= [100, 130, 300, 450, 30];
  public pieChartType: string = 'pie';
  
  
  /**
   * obtenerid del combo
   */
  public obtenerid() {
    this.verSeleccion = this.idpregunta;
    console.log("Call value select",this.verSeleccion);
  }


  public obtenerDatoGrap(): void {
    this.pieChartData = [];
    this.pieChartLabels = [];
    console.log("Call actualizar reto button",this.verSeleccion);
    this.chartsData = null;
    console.log('Wipe chartsData:',this.chartsData);
    this.chartService.getDatosGrap(this.verSeleccion).then((chartsData: GraficoDatos[]) => {
      this.chartsData = chartsData.map((chartsData) => {
        console.log('this.chartsData: ',chartsData.respuesta);
        this.pieChartLabels.push(chartsData.respuesta);
        console.log('this.chartsData: ',chartsData.rep);
        this.pieChartData.push(chartsData.rep);
        return chartsData;
      });
    });
  }
  
 

}
  
  

