import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Player } from '../models/player';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private apiUrl: string = 'http://localhost:5151/api/player'

  

  constructor(private http: HttpClient) {}
  

  getPlayers(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        // You can do additional data manipulation or parsing here
        return response; // Here we just return the parsed JSON object
      })
    );
  }

}
