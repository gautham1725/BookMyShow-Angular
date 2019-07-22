import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
})

export class ErrorComponent {

  constructor(private route : ActivatedRoute , private router : Router){};


  onBack() : void{
    this.router.navigate(['/home'])
}

}
