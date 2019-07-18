import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HomeComponent } from './../home/home.component'; 
import { MovieComponent } from './../movie/movie.component'; 
import { AboutComponent } from './../about/about.component'; 
import { BookComponent } from "src/book/book.component";
import { RatingComponent } from "src/shared/rating.component";

@NgModule({
  declarations: [
    AppComponent , HomeComponent , AboutComponent , MovieComponent , BookComponent , RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
