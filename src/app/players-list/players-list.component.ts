import { Component, Injectable, OnInit } from '@angular/core';
import { PlayerService } from './player.service';


@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})

@Injectable()
export class PlayersListComponent implements OnInit{

  players: any;
  constructor(private service: PlayerService){}

  ngOnInit(): void {
    this.service.getPlayers().subscribe(response => {
      this.players = response; // Parsed data is directly available here
      console.log(this.players); // You can now render the data in the component
    });
  }

  


  }
  
 