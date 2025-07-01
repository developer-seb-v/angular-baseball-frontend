import { Component } from '@angular/core';
import { PlayerService } from '../players-list/player.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.html',
  styleUrls: ['./update-player.css']
})
export class UpdatePlayer {
 

 
 constructor(private service: PlayerService) {

  
 }

  players: any;
  ngOnInit(): void {
    this.service.getPlayers().subscribe(response => {
      this.players = response; 
      // Parsed data is directly available here
      console.log(this.players); // You can now render the data in the component
    });
  }

 updatePlayer(){}
}
