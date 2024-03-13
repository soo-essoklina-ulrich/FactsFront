import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule {

}
