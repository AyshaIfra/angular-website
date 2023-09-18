import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';
import { ProcessComponent } from './process/process.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';


@NgModule({
  declarations: [
    HomeComponent,
    LandingPageComponent,
    AboutComponent,
    TeamComponent,
    ServicesComponent,
    WorkComponent,
    ProcessComponent,
    SkillsComponent,
    ContactComponent,
    WhoWeAreComponent,
    HowWeWorkComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
