import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-country-form',
  templateUrl: './add-country-form.component.html',
  styleUrls: ['./add-country-form.component.css'],
})
export class AddCountryFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:5151/api/player/country')
      .subscribe((response) => {
        this.countries = response;
      });
  }

  countryForm = this.fb.group({
    countryId: ['', Validators.minLength(1)],
    countryName: ['', Validators.required],
  });

  header: HttpHeaders = new HttpHeaders({
    'Content-Type': 'Application/Json',
  });

  countries: any;

  onSubmit() {
    if (this.countryForm.valid) {
      this.http
        .post(
          'http://localhost:5151/api/player/addcountry',
          this.countryForm.value,
          { headers: this.header }
        )
        .subscribe((res) => {
          alert('Country added');

          console.log(res, this.GoToAddPlayer());
          // this.goToAddPlayer()
        });
    } else {
      alert('Please fill out fields');
    }
  }

  GoToAddPlayer() {
    this.router.navigate(['add-player']);
  }
}
