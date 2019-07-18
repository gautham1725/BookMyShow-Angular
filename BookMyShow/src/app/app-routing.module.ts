import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { MovieComponent } from 'src/movie/movie.component';
import { AboutComponent } from 'src/about/about.component';
import { BookComponent } from "src/book/book.component";

const routes: Routes = [
  {path:'home' , component : HomeComponent} ,
  {path:'movies' , component : MovieComponent } ,
  {path:'movies/:id ' , component : BookComponent } ,
  {path:'movies/:name ' , component : BookComponent } ,
  {path:'about' , component : AboutComponent} ,
  {path:'' , component : HomeComponent} ,
  {path:'**' , component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
