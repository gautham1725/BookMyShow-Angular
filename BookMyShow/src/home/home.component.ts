import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  
  trendingMovies:any[] = [
      

    { 
      movieName : "Avenger EndGame" ,
      movieText : "Thanos Killed or not ??" , 
      actor : "Captain America" ,
      genre: "Action" ,
      rating:"4/5" , 
      imageUrl : "./../assets/avengercard.jpg" 
    },

    { 
      movieName : "Bahubali 2" ,
      movieText : "Kattapa killed Bahubali ??" , 
      actor : "Prabhas,Rana" ,
      genre: "Action" ,
      rating: "3/5" , 
      imageUrl : "./../assets/bahubalicard.jpg"
    },

    { 
      movieName : "Petta" ,
      movieText : "Vintage thalaivar is back !!" , 
      actor : "RajiniKanth" ,
      genre: "Action" ,
      rating: "4.5/5" , 
      imageUrl : "./../assets/petta.jpg" 
    },

    { 
      movieName : "lion King" ,
      movieText : "Time To Lead !!" , 
      actor : "Siddharth" ,
      genre: "Animation" ,
      rating: "2.5/5" , 
      imageUrl : "./../assets/lionkingcard2.jpg" 
    },

    { 
      movieName : "Nerkonda parvai" ,
      movieText : "Its KingMaker Time !!" , 
      actor : "Ajith Kumar" ,
      genre: "Action" ,
      rating: "5/5" , 
      imageUrl : "./../assets/nkpcard.jpg" 
    }

];


}
