import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmDetailsComponent, FilmListComponent, PeopleDetailsComponent, PeopleListComponent } from './pages';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'films' },
  { path: 'films', component: FilmListComponent },
  { path: 'films/:id', component: FilmDetailsComponent },
  { path: 'people', component: PeopleListComponent },
  { path: 'people/:id', component: PeopleDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
