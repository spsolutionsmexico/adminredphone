/*import { Injectable } from '@angular/core';

@Injectable()
export class ChartDemoService {

  constructor() { }

}*/
import { Injectable } from '@angular/core';
import { ChartDemo } from './chart-demo';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChartDemoService {
    private chartdemosUrl = '/api/chartdemo';

    constructor (private http: Http) {}

    // get("/api/contacts")
    getChatDemoData(): Promise<ChartDemo[]> {
      return this.http.get(this.chartdemosUrl)
                 .toPromise()
                 .then(response => response.json() as ChartDemo[])
                 .catch(this.handleError);
    }

    private handleError (error: any): Promise<any> {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console
      return Promise.reject(errMsg);
    }
  }
