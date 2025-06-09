import { Component, Injectable, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { MatButton } from '@angular/material/button';
import { Player } from '../models/player';


@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})

@Injectable()
export class PlayersListComponent implements OnInit {

  players: any;
  constructor(private service: PlayerService) { }

  refresh(): void {
    window.location.reload();
}

  ngOnInit(): void {
    this.service.getPlayers().subscribe(response => {
      this.players = response; 
      // Parsed data is directly available here
      console.log(this.players); // You can now render the data in the component
    });
  }
   
 deletePlayer(id: string) {
    this.service.deletePlayer(id).subscribe({
      next: res => console.log('Player deleted', res, window.location.reload()),
      error: err => console.error('Error deleting user', err)
    });
  }

}

