import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router){}
  
  goToAdd(){
    this.router.navigate(['add-player']);
  }

  goToHome(){
    this.router.navigate(['player-list']);
  }

  goToCountry(){
    this.router.navigate(['app-add-country-form']);
  }

  goToUpdate(){
    this.router.navigate(['app-update-player']);
  }
}
