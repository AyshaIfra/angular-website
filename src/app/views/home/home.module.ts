import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule,NgbCollapseModule,NgbNavModule, NgbProgressbarModule} from "@ng-bootstrap/ng-bootstrap";
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
import { NumbersComponent } from './numbers/numbers.component';

@NgModule({
  declarations: [
    HomeComponent,
    LandingPageComponent,
    AboutComponent,
    TeamComponent,
    ServicesComponent,
    ProcessComponent,
    SkillsComponent,
    ContactComponent,
    WhoWeAreComponent,
    HowWeWorkComponent,
    WorkComponent,
    NumbersComponent
    
     
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbCollapseModule,
    NgbModule,
    NgbNavModule,
    NgbProgressbarModule
  ]
})
export class HomeModule { }
