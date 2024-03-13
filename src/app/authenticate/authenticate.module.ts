import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { AuthenticateComponent } from './authenticate.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { SinscrireComponent } from './sinscrire/sinscrire.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AuthenticateComponent,
    SeConnecterComponent,
    SinscrireComponent
  ],
  imports: [
    CommonModule,
    AuthenticateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthenticateModule { }
