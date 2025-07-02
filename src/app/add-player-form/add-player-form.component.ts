import { Component, inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Country } from '../models/country';
import { Position } from '../models/position';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-player-form',
  templateUrl: './add-player-form.component.html',
  styleUrls: ['./add-player-form.component.css']
})

export class AddPlayerFormComponent implements OnInit {

  // newer syntax for dependency injection
  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private router: Router) { }


  ngOnInit(): void {
    this.http.get("http://localhost:5151/api/country/country").subscribe(
      response => {
        this.countries = response;
      }
    )
  }


  goToAddCountry(){
    this.router.navigate(['app-add-country-form']);
  }
  
  countries: any;

  header: HttpHeaders = new HttpHeaders({
    'Content-Type': "Application/Json"
  })

   goToHome(){
    this.router.navigate(['player-list']);
  }

  playerForm = this.fb.group({
    playerNumber: ['', Validators.minLength(1)],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    position: ['', Validators.required],
    country: ['', Validators.required]
  })

  positions: Position[] = [
    {PositionNumber: 1, PositionName: 'pitcher'},
    {PositionNumber: 2, PositionName: 'catcher'},
    {PositionNumber: 3, PositionName: 'first base'},
    {PositionNumber: 4, PositionName: 'second base'},
    {PositionNumber: 5, PositionName: 'third base'},
    {PositionNumber: 6, PositionName: 'shortstop'},
    {PositionNumber: 7, PositionName: 'left field'},
    {PositionNumber: 8, PositionName: 'center field'},
    {PositionNumber: 9, PositionName: 'right field'}
  ]

  onSubmit() {
    if (this.playerForm.valid)
    {
       this.http.post('http://localhost:5151/api/player/add', this.playerForm.value, { headers: this.header }).
      subscribe((res) => {
        console.log(res, this.goToHome());
      })
    }else {alert("Please fill out fields")} 
   
  }

}



