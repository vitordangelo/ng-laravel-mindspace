import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx'
import { Observable } from "rxjs/Observable";

@Injectable()
export class QuoteService {

  constructor(private http: Http) { }

  addQuote(content: string) {
    const body = JSON.stringify({content: content});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost/api/v1/quote', body, {headers: headers})
      .map((response: Response) => {
        return response.json().data;
      })
  }

  getQuotes(): Observable<any> {
    return this.http.get('http://localhost/api/v1/quote')
      .map((response: Response) => {
        return response.json().data;
      })
  }

  updateQuote(id: Number, newContent: string) {
    const body = JSON.stringify({content: newContent});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('http://localhost/api/v1/quote/' + id, body, {headers: headers})
      .map((response: Response)  => response.json().data);
  }

  deleteQuote(id: Number) {
    return this.http.delete('http://localhost/api/v1/quote/' + id)
      .map((response: Response)  => response.json().data);
  }

}
