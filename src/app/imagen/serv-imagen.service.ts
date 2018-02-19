import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ImagenComponent } from './imagen.component';
import { RespuestaDatos } from "./RespuestaDatos";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServImagenService {
  private datosRespuestas = '/api/respuestas';

  constructor(private http: Http) { }


  getRespuestas(idreto) : Promise < RespuestaDatos []> {
    console.log('id-reto: ', idreto);
    return this.http.get(this.datosRespuestas + '/' +idreto)
      .toPromise()
      .then(response => response.json() )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console
    return Promise.reject(errMsg);
  }

}