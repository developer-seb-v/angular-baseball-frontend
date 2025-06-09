import { Component, inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-player-form',
  templateUrl: './add-player-form.component.html',
  styleUrls: ['./add-player-form.component.css']
})

export class AddPlayerFormComponent {
  
  // newer syntax for dependency injection
 constructor(private fb: FormBuilder,
             private http: HttpClient
 ){}

header : HttpHeaders = new HttpHeaders({
  'Content-Type' : "Application/Json"
})

 playerForm = this.fb.group({
    playerNumber: ['', Validators.minLength(1)],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required] ,
    position:['', Validators.required],
    country: ['', Validators. required]
  })


  onSubmit(){
   this.http.post('http://localhost:5151/api/player/addplayerobject', this.playerForm.value, {headers: this.header} ).
   subscribe((res) => {
    console.log(res);
   })
  }
  
}



