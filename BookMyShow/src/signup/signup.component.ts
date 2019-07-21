import { NgForm } from "@angular/forms/forms";
import { Component, OnInit } from "@angular/core";
import { NewUser } from './NewUser';

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
constructor() {


}
    user = new NewUser();

    save(userForm:NgForm){
    console.log(userForm.form);
    console.log('Saved data ' + userForm.value);

    }

}