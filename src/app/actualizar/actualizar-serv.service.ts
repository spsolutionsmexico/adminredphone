import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ActualizarServService {

  constructor(private http: Http) { }

  private actualizarUrl = '/api/actualizar';
  private actualizarRetoUrl = '/api/actualizar/reto';

  // get("/api/actualizar")
  getActualizar() {
    console.log('Iniciando getActualizar usuarios');
    return this.http.get(this.actualizarUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  //get("/api/reto")
  getActualizarReto(idreto) {
    console.log('Iniciando getActualizar');
    console.log('id-reto: ',idreto);
    return this.http.get(this.actualizarRetoUrl+ '/' +idreto)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  private handleError (error: any): Promise<any> {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console
    return Promise.reject(errMsg);
  }

}
