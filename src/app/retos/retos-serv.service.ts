import { Injectable } from '@angular/core';
import { Retos } from './Retos';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class RetosServService {

  private retosUrl = '/api/retos';
  
      constructor (private http: Http) {}
  
      // get("/api/retos")
      getRetos(): Promise<Retos[]> {
        return this.http.get(this.retosUrl)
                   .toPromise()
                   .then(response => response.json() as Retos[])
                   .catch(this.handleError);
      }

      private handleError (error: any): Promise<any> {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console
        return Promise.reject(errMsg);
      }
}
