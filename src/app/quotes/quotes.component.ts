import { Quote } from './../quote.interface';
import { QuoteService } from './../quote.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[];
  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }

  onGetQuotes() {
    this.quoteService.getQuotes()
      .subscribe(quotes => {
        this.quotes = quotes;
        console.log(this.quotes);
      }, error => console.log(error));
  }

}
