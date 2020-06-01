import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; // Add this
import { ListComponent } from './list/list.component'; // Add this
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrewDetailComponent } from './brew-detail/brew-detail.component';
import { BrewOverviewComponent } from './brew-overview/brew-overview.component';
import { BrewContactComponent } from './brew-contact/brew-contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'list/:id',
    component: BrewDetailComponent,
    children: [
      { path: 'overview', component: BrewOverviewComponent },
      { path: 'contact', component: BrewContactComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ListComponent, PageNotFoundComponent, BrewDetailComponent, BrewOverviewComponent, BrewContactComponent, DashboardComponent]
