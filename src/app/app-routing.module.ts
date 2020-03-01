import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'mentees', component: MentorshipComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
