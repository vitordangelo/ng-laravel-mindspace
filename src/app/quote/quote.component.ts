import { Quot } from './../quot';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote: Quot = new Quot();

  constructor() { 
  }

  ngOnInit() {
  }

}
