import { QuoteService } from './../quote.service';
import { Quot } from './../quot';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote: Quot = new Quot();
  @Output() quoteDeleted = new EventEmitter;
  editing: boolean = false;
  editValue: string = '';

  constructor(private quoteService: QuoteService) { 
  }

  ngOnInit() {
  }

  onEdit() {
    this.editing = true;
    this.editValue = this.quote.content;
  }

  onUpdate() {
    this.quoteService.updateQuote(this.quote.id, this.editValue)
      .subscribe(quote => {
        this.quote = quote;
        this.editValue = '';
      })
    this.editing = false;
  }

  onCancel() {
    this.editValue = '';
    this.editing = false;
  }

  onDelete() {
    this.quoteService.deleteQuote(this.quote.id)
      .subscribe((res) => {
        this.quoteDeleted.emit(this.quote);
      });

    // this.quoteDeleted.emit(this.quote);
  }

}
