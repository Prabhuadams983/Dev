import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import {FriendsListComponent} from './friends-list/friends-list.component';
import {MainContentComponent} from './main-content/main-content.component';
const routes: Routes = [
  {path:'', component:MainContentComponent},
  {path:'friends-list', component:FriendsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
