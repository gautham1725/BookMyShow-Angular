import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
})


export class BookComponent implements OnInit {

    constructor(private route : ActivatedRoute , private router : Router){};

    pageTitle:string="Booking Id";
    movieId:number;

    ngOnInit(): void {
        let name = this.route.snapshot.paramMap.get('name'); 
        console.log(name);
        this.pageTitle += `:${name}`;
    }

    onBack() : void{
        this.router.navigate(['/movies'])
    }

}