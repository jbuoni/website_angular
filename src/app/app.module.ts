import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { ProjectsComponent } from './projects/projects.component';
import { AlgoComponent } from './algo/algo.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LandingComponent,
    MentorshipComponent,
    ProjectsComponent,
    AlgoComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
