import { Quote } from './../quote.interface';
import { QuoteService } from './../quote.service';
import { Component, OnInit } from '@angular/core';
import { Quot } from './../quot';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: any = [];
  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }

  onGetQuotes() {
    this.quoteService.getQuotes()
      .subscribe(quotes => {
        this.quotes = quotes;
      }, error => console.log(error));
  }

   onDeleted(quote) {
    const position = this.quotes.findIndex((itens) => {
      return itens.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }

}