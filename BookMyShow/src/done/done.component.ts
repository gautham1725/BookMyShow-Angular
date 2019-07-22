import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'done',
  templateUrl: './done.component.html',
})

export class DoneComponent {

    
    constructor(private route : ActivatedRoute , private router : Router){};
    

     onBack() : void{
        this.router.navigate(['/home'])
    }


}
