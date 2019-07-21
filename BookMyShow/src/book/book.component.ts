import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { User } from 'src/book/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
})

export class BookComponent implements OnInit {

    constructor(private route : ActivatedRoute , private router : Router){};

    movieName:string="";

    ngOnInit(): void {
        let name = this.route.snapshot.paramMap.get('name'); 
        console.log(name);
        this.movieName += `${name}`;
    }

    onBack() : void{
        this.router.navigate(['/movies'])
    }

    user = new User();

    save(userForm:NgForm){
        console.log(userForm.form);
        console.log('Saved data ' + userForm.value);
    }

}