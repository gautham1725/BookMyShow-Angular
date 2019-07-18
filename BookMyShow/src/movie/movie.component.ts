import { Component , OnInit , OnChanges , OnDestroy  } from '@angular/core';
import { MovieService } from "src/movie/movie.service";

@Component({
  selector: 'mov-app',
  templateUrl : './movie.component.html',
})

export class MovieComponent implements OnInit , OnChanges , OnDestroy  {
 

  constructor( private movService : MovieService ){
    
  }

  ngOnInit(): void {
    this.movies = this.movService.getMovies();
  }

  ngOnChanges(): void {
    console.log("At change detection phase "+this.title);
  }

  ngOnDestroy(): void {
    console.log("Destroying the component "+this.title);
  }
  
  

  title:string = 'Now Showing';
  imgWidth:number=100;
  imgHeight:number=50;
  url:string='./../assets/Movie-Images/avenger.jpg';
  

  movies:any[] = [

    // { mid :1 , movieName : "avenger" , actor : "captain" , release:"May" , price:200 , rating:4 , imageUrl : './../assets/Movie-Images/avenger.jpeg' },
    // { mid :2 , movieName : "KGF" , actor : "Yash" , release:"June" , price:300 , rating:3 , imageUrl : "" },
    // { mid :3 , movieName : "Bahubali" , actor : "Prabhas" , release:"May" , price:200 , rating:4 , imageUrl : "" },
    // { mid :4 , movieName : "2.0" , actor : "Rajinikanth" , release:"Feb" , price:400 , rating:3.5 , imageUrl : "" },
    // { mid :5 , movieName : "FF7" , actor : "Vin diesel" , release:"August" , price:200 , rating:4 , imageUrl : './../assets/Movie-Images/ff7.jpg' },
    // { mid :6 , movieName : "Ironman" , actor : "robert" , release:"March" , price:500 , rating:5 , imageUrl : "" },

  ]
  
  onRatingClicked(output : string) : void{
    this.title += output ;
  }

}
