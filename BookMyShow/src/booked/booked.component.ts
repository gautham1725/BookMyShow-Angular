import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'booked',
  templateUrl: './booked.component.html',
})

export class BookedComponent {

    constructor(private route : ActivatedRoute , private router : Router){};
    

     onBack() : void{
        this.router.navigate(['/home'])
    }


}
