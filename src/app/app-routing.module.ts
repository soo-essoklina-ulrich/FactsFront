import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: 'auth', pathMatch: 'full'},
  { path: 'auth', loadChildren: () => import('./authenticate/authenticate.module').then(m => m.AuthenticateModule) },
  { path: 'admin', loadChildren: () => import('./administrateur/administrateur.module').then(m => m.AdministrateurModule) },
  { path: 'manager', loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
