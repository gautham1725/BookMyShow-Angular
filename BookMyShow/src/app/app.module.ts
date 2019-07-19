import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HomeComponent } from './../home/home.component'; 
import { MovieComponent } from './../movie/movie.component'; 
import { AboutComponent } from './../about/about.component'; 
import { BookComponent } from "src/book/book.component";
import { RatingComponent } from "src/shared/rating.component";
import { UserComponent } from "src/user/user.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent , HomeComponent , AboutComponent , MovieComponent , BookComponent , RatingComponent , UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
