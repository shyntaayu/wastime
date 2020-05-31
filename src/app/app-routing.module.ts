import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; // Add this
import { ListComponent } from './list/list.component'; // Add this
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ListComponent, PageNotFoundComponent]
