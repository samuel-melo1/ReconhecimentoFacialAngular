import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial-page',
  templateUrl: './inicial-page.component.html',
  styleUrls: ['./inicial-page.component.css']
})
export class InicialPageComponent  {
  router: Router;

  constructor( router: Router) {
    this.router = router;
  }
  goToList() {
    this.router.navigate(['listagem']);
    
  }

}
