import { Injectable } from '@angular/core';
import { Retos } from './retos';
import { Pregunta } from './pregunta';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class RetosServService {

  private retosUrl = '/api/retos';
  private preguntasUrl = '/api/retos';
  
      constructor (private http: Http) {}
  
      // get("/api/retos")
      getRetos(): Promise<Retos[]> {
        return this.http.get(this.retosUrl)
                   .toPromise()
                   .then(response => response.json() as Retos[])
                   .catch(this.handleError);
      }

      getPreguntas(idreto): Promise<Pregunta[]> {
        return this.http.get(this.preguntasUrl+ '/' +idreto)
                   .toPromise()
                   .then(response => response.json() as Pregunta[])
                   .catch(this.handleError);
      }

      private handleError (error: any): Promise<any> {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console
        return Promise.reject(errMsg);
      }
}
