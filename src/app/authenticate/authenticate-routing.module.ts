import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './authenticate.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { SinscrireComponent } from './sinscrire/sinscrire.component';

const routes: Routes = [
  { path: '', redirectTo: 'se-connecter', pathMatch: 'full'},
  { path: 'se-connecter', component: SeConnecterComponent},
  { path: 'sinscrire', component: SinscrireComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticateRoutingModule { }
