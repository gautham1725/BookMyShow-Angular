import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { User } from 'src/book/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'wishlist',
  templateUrl: './wishlist.component.html',
})

export class WishListComponent implements OnInit {

    constructor(private route : ActivatedRoute , private router : Router){};

    wishlist:any=[];

    ngOnInit(): void {
        let name = this.route.snapshot.paramMap.get('name'); 
        console.log(name);
        this.wishlist.push(`${name}`);
        console.log(name);
    }

    onBack() : void{
        this.router.navigate(['/home'])
    }

    user = new User();

    save(userForm:NgForm){
        console.log(userForm.form);
        console.log('Saved data ' + userForm.value);
    }

}