import { NgForm } from "@angular/forms/forms";
import { Component, OnInit } from "@angular/core";
import { NewUser } from './NewUser';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector:'user-app',
    templateUrl:'signup.component.html'
})

export class NewUserComponent implements OnInit{
    ngOnInit(): void {
        
    }

/**
 *
 */

constructor(private route : ActivatedRoute , private router : Router){};

    user = new NewUser();

     onBack() : void{
        this.router.navigate(['/home'])
    }


    save(userForm:NgForm){
    console.log(userForm.form);
    console.log('Saved data ' + userForm.value);
    this.router.navigate(['/done'])
    }

}