import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { GraficoDatos } from './graficodatos';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServGraficoService {
  private datosGraficas = '/api/respuestagrap';

  constructor(private http: Http) { }

  getDatosGrap(idpreguntaai): Promise<GraficoDatos[]> {
    return this.http.get(this.datosGraficas+'/'+idpreguntaai)
               .toPromise()
               .then(response => response.json() as GraficoDatos[])
               .catch(this.handleError);
  }

  private handleError (error: any): Promise<any> {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console
    return Promise.reject(errMsg);
  }

}
