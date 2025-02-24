import { Component, Injectable, OnInit } from '@angular/core';

import { PlayerService } from './player.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})

@Injectable()
export class PlayersListComponent implements OnInit{
  data: any;

  constructor(private service: PlayerService ){}

  ngOnInit(): void {
    this.service.getData().subscribe(response => {
      this.data = response; // Assign the JSON response to the data property
    });
  }
 

}
