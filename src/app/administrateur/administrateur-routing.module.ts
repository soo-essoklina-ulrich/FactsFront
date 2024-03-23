import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdministrateurComponent} from './administrateur.component';
import {DashboardComponent} from "../components/dashboard/dashboard.component";
import {ProfileComponent} from "../components/profile/profile.component";
import {ArticleComponent} from "../components/article/article.component";

const routes: Routes = [
  { path: '', component: AdministrateurComponent,
    children:
      [
        { path: 'dashboard', component: DashboardComponent },
        {path: 'profile', component: ProfileComponent},
        // {path: 'proformat' component: ProformatComponent},
        {path: 'article', component: ArticleComponent},
        { path:'', redirectTo: 'article', pathMatch: 'full'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrateurRoutingModule { }
