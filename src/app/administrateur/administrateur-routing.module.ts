import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdministrateurComponent} from './administrateur.component';
import {DashboardComponent} from "../components/dashboard/dashboard.component";

const routes: Routes = [
  { path: '', component: AdministrateurComponent,
    children:
      [
        { path: 'dashboard', component: DashboardComponent },
        { path:'', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrateurRoutingModule { }
