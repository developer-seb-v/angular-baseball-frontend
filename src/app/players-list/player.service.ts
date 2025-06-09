import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Player } from '../models/player';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private apiUrl: string = 'http://localhost:5151/api/player/'


  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')

  constructor(private http: HttpClient) { }


  getPlayers(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        // You can do additional data manipulation or parsing here
        return response; // Here we just return the parsed JSON object
      })
    );
  }

  public handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


  /** POST: add a new hero to the database */
  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.apiUrl + 'player/add', player, { headers: this.headers })
      .pipe(
        catchError(this.handleError))
  }


    deletePlayer(id: string) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
