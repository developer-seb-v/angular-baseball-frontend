import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersListComponent } from './players-list/players-list.component';
import { AddPlayerFormComponent } from './add-player-form/add-player-form.component';
import { AddCountryFormComponent } from './add-country-form/add-country-form.component';
import { UpdatePlayer } from './update-player/update-player';

const routes: Routes = [
  { path: '',   redirectTo: 'player-list', pathMatch: 'full'},
  {path: 'player-list', component:PlayersListComponent},
  {path: 'add-player', component: AddPlayerFormComponent},
  {path: 'app-add-country-form', component:AddCountryFormComponent},
  {path: 'app-update-player', component:UpdatePlayer}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
