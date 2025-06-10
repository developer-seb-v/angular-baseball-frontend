import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-country-form',
  templateUrl: './add-country-form.component.html',
  styleUrls: ['./add-country-form.component.css']
})
export class AddCountryFormComponent {
  
  constructor(private fb: FormBuilder) {
    
  }


   playerForm = this.fb.group({
      countryId: ['', Validators.minLength(1)],
      countryName: ['', Validators.required],
    })
}
