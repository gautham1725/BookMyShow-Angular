import { Component , OnInit , OnChanges , OnDestroy  } from '@angular/core';
import { MovieService } from "src/movie/movie.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'mov-app',
  templateUrl : './movie.component.html',
})

export class MovieComponent   {
 

  constructor( private movService : MovieService  ){
    
  }

  title:string = 'Now Showing :';
  imgWidth:number=100;
  imgHeight:number=50;
  movies:any[] = [];
  searchedMovies:any[]=[];
 _movieSearch:string;
  errorMessage:string;


  ngOnInit(): void {

      this.movService.getMovies().subscribe(
      movies =>{
      this.movies = movies;
      this.searchedMovies = movies;
      },

      error =>this.errorMessage = error

      );

  }

  get movieSearch():string{
  return this._movieSearch;
  }

  set movieSearch(value:string){
  this._movieSearch = value;
  this.searchedMovies = this.movieSearch ? this.searchMovies(this.movieSearch):this.movies;
  }

  searchMovies(search:string):any[]{

  search = search.toLocaleLowerCase();
   return this.movies.filter((movie:any)=>
   movie.movieName.toLocaleLowerCase()== search);
  
  }  
  
  
  onRatingClicked(output : string) : void{
    this.title += output ;
  }

}
