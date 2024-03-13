import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdministrateurRoutingModule} from './administrateur-routing.module';
import {AdministrateurComponent} from './administrateur.component';
import {ComponentsModule} from "../components/components.module";


@NgModule({
  declarations: [
    AdministrateurComponent
  ],
  imports: [
    CommonModule,
    AdministrateurRoutingModule,
    ComponentsModule
  ]
})
export class AdministrateurModule { }
