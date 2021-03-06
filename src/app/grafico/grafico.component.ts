import { Component, Input } from '@angular/core';
import { ServGraficoService } from './serv-grafico.service';
import { GraficoDatos } from './graficodatos';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { RetosServService } from 'app/retos/retos-serv.service';
import { Retos } from 'app/retos/retos';
import { Pregunta } from 'app/retos/pregunta';
import { RetosDetalle } from 'app/retos/retoDetalle';

@Component({
  selector: 'grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
  providers: [ServGraficoService, RetosServService]
})

export class GraficoComponent {

  retoDetalle: RetosDetalle[];
  pregunta: Pregunta[];
  retos: Retos[];
  chartsData: GraficoDatos[];

  constructor(private chartService: ServGraficoService, private retosService: RetosServService) { }

  public idpregunta: string; // Iniciamos
  public verSeleccion: string;
  public idreto: string;

  public idpreguntaai: string;
  public pieChartLabels: Array<any> = new Array(); //string[]; //= ['Acuerdo', 'Acuerdo en parte', 'Desacuerdo en parte', 'Desacuerdo', 'No deseo responder'];
  public pieChartData: Array<any> = new Array(); //number[]; //= [100, 130, 300, 450, 30];
  public pieChartType: string = 'pie';

  ngOnInit() {
    this.retosService
      .getRetos().then((retos: Retos[]) => {
        this.retos = retos.map((retos) => {
          return retos
        });
      });
  }

  public obtenerPreguntas() {
    console.log('reto id:', this.idreto)
    

    this.retosService
      .getDetalleReto(this.idreto).then((retoDetalle: RetosDetalle[]) => {
        this.retoDetalle = retoDetalle.map((retoDetalle) => {
          retoDetalle.fechaenvio = retoDetalle.fechaenvio.substr(0, 10);
          console.log('Contenido retos:',retoDetalle)
          return retoDetalle;
        });
      });


    this.retosService
      .getPreguntas(this.idreto).then((pregunta: Pregunta[]) => {
        this.pregunta = pregunta.map((pregunta) => {
          return pregunta;
        });
      });
  }

  /**
   * obtenerid del combo
   */
  public obtenerid() {
    this.verSeleccion = this.idpregunta;
    console.log("Call value select", this.idpregunta);
  }


  public obtenerDatoGrap(): void {
    this.pieChartData = [];
    this.pieChartLabels = [];
    console.log("Call actualizar reto button", this.verSeleccion);
    this.chartsData = null;
    console.log('Wipe chartsData:', this.chartsData);
    this.chartService.getDatosGrap(this.idreto,this.verSeleccion).then((chartsData: GraficoDatos[]) => {
      this.chartsData = chartsData.map((chartsData) => {
        console.log('this.chartsData: ', chartsData.respuesta);
        this.pieChartLabels.push(chartsData.respuesta);
        console.log('this.chartsData: ', chartsData.rep);
        this.pieChartData.push(chartsData.rep);
        return chartsData;
      });
    });
  }



}