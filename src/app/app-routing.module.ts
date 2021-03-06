import { NewQuoteComponent } from './new-quote/new-quote.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', component: QuotesComponent},
  { path: 'new-quote', component: NewQuoteComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
