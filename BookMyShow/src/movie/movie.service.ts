import { Injectable } from "@angular/core";
import { HttpClient ,  HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import {tap} from 'rxjs/Operators';

@Injectable({
    providedIn : 'root'
})

export class MovieService{
    // handleError: any;

    // movieurl = 'data/movie.json';

    // constructor(private httpser : HttpClient){
        
    // }

    // getMovies():Observable<any[]>{

    //     return this.httpser.get<any>(this.movieurl).pipe(tap(
    //         data => console.log('Movies : '+JSON.stringify(data))
    //     ) , catchError(this.handleError));
    // }
}