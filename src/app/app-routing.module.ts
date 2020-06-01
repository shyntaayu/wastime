import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; // Add this
import { ListComponent } from './list/list.component'; // Add this
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrewDetailComponent } from './brew-detail/brew-detail.component';
import { BrewOverviewComponent } from './brew-overview/brew-overview.component';
import { BrewContactComponent } from './brew-contact/brew-contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisabilitasComponent } from './disabilitas/disabilitas.component';
import { AddDisabilitasComponent } from './disabilitas/add-disabilitas/add-disabilitas.component';
import { EditDisabilitasComponent } from './disabilitas/edit-disabilitas/edit-disabilitas.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
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
  { path: '', pathMatch: 'full', redirectTo: 'add-disabilitas' },
  { path: 'add-disabilitas', component: AddDisabilitasComponent, canActivate: [AuthGuard] },
  { path: 'edit-disabilitas', component: EditDisabilitasComponent, canActivate: [AuthGuard] },
  { path: 'disabilitas-list', component: DisabilitasComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent, 
  ListComponent, 
  PageNotFoundComponent, 
  BrewDetailComponent, 
  BrewOverviewComponent, 
  BrewContactComponent, 
  DashboardComponent,
  DisabilitasComponent,
  AddDisabilitasComponent,
  EditDisabilitasComponent,
  LoginComponent
]
