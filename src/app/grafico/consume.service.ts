import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Data } from ./Data
@Injectable()
export class GrapServService {

  private GrapUrl = '/api/respuestagrap';
  
      constructor (private http: Http) {}
  
      //get("/api/respuestagrap")
      getData(): Promise<Data[]> {
        return this.http.get(this.GrapUrl)
                   .toPromise()
                   .then(response => response.json() as Data[])
                   .catch(this.handleError);
      }

      private handleError (error: any): Promise<any> {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console
        return Promise.reject(errMsg);
      }
}
