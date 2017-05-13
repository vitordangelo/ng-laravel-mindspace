import { AuthService } from './auth.service';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx'
import { Observable } from "rxjs/Observable";

@Injectable()
export class QuoteService {

  constructor(private http: Http, private authService: AuthService) { }

  addQuote(content: string) {
    const token = this.authService.getToken();
    const body = JSON.stringify({content: content});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost/api/v1/quote?token=' + token, body, {headers: headers})
      .map((response: Response) => {
        return response.json().data;
      })
  }

  getQuotes(): Observable<any> {
    const token = this.authService.getToken();
    return this.http.get('http://localhost/api/v1/quote?token='+ token)
      .map((response: Response) => {
        return response.json().data;
      })
  }

  updateQuote(id: Number, newContent: string) {
    const token = this.authService.getToken();
    const body = JSON.stringify({content: newContent});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('http://localhost/api/v1/quote/' + id + '?token=' + token, body, {headers: headers})
      .map((response: Response)  => response.json().data);
  }

  deleteQuote(id: Number) {
    const token = this.authService.getToken();
    return this.http.delete('http://localhost/api/v1/quote/' + id + '?token=' + token)
      .map((response: Response)  => response.json().data);
  }

}
