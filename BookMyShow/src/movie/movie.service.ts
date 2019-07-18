import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})

export class MovieService{

    getMovies():any[]{

        return [

            { mid :1 , movieName : "avenger" , actor : "captain" , release:"May" , price:200 , rating:4 , 
                                    imageUrl : "./../assets/avenger.jpeg" },
            { mid :2 , movieName : "KGF" , actor : "Yash" , release:"June" , price:300 , rating:3 , imageUrl : "./../assets/kgf.jpg" },
            { mid :3 , movieName : "Bahubali" , actor : "Prabhas" , release:"May" , price:200 , rating:4 , imageUrl : "./../assets/bahubali.jpg" },
            { mid :4 , movieName : "NerKonda Parvai" , actor : "Rajinikanth" , release:"Feb" , price:400 , rating:3.5 , imageUrl : "./../assets/nkpcard.jpg" },
            { mid :5 , movieName : "LionKing" , actor : "sidharth" , release:"August" , price:200 , rating:4 , imageUrl : './../assets/lionkingcard2.jpg' },
            { mid :6 , movieName : "Ironman" , actor : "robert" , release:"March" , price:500 , rating:5 , imageUrl : "./../assets/Iron-Man.jpg" },

        ];
    }
}