import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterLink} from "@angular/router";
import { ProfileComponent } from './profile/profile.component';
import {PipesModule} from "../pipes/pipes.module";
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ArticleComponent } from './article/article.component';
import { ProfromaComponent } from './profroma/profroma.component';
import { PreviwesFactsComponent } from './previwes-facts/previwes-facts.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    ProfileComponent,
    PagetitleComponent,
    ArticleComponent,
    ProfromaComponent,
    PreviwesFactsComponent
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    PagetitleComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        PipesModule,
        ReactiveFormsModule,
        FormsModule,

    ]
})
export class ComponentsModule {

}
