import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Player } from '../models/player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private apiUrl: string = 'http://localhost:5151/api/player'

  

  constructor(private http: HttpClient) {}
  
  getData(): Observable<any> {
     // Replace with your API endpoint
    return this.http.get(this.apiUrl);
  }

}
