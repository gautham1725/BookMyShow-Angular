
import { User } from "./user";
import { NgForm } from "@angular/forms/forms";
import { Component, OnInit } from "@angular/core";

@Component({
    selector:'user-app',
    templateUrl:'./user.component.html'
})

export class UserComponent implements OnInit{
    ngOnInit(): void {
        
    }

/**
 *
 */
constructor() {


}
    user = new User();

    save(userForm:NgForm){
    console.log(userForm.form);
    console.log('Saved data ' + userForm.value);

    }

}