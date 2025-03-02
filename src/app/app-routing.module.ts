import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersListComponent } from './players-list/players-list.component';
import { AddPlayerFormComponent } from './add-player-form/add-player-form.component';

const routes: Routes = [
  { path: '',   redirectTo: 'player-list', pathMatch: 'full'},
  {path: 'player-list', component:PlayersListComponent},
  {path: 'add-player', component: AddPlayerFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
