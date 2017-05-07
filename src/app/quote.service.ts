import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx'
import { Observable } from "rxjs/Observable";

@Injectable()
export class QuoteService {

  constructor(private http: Http) { }

  getQuotes(): Observable<any> {
    return this.http.get('http://localhost/api/v1/quote')
      .map((response: Response) => {
        return response.json().data;
      })
  }

}
