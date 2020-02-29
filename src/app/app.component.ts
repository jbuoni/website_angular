import { Component } from '@angular/core';

interface IIcon {
  faIcon: string;
  title: string;
  exp: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less', './shared/animate.less']
})

export class AppComponent {
  onLanding: boolean;
  height: number;
  width: number;
  aboutIcons: Array<IIcon> = [
    {
      faIcon: 'fas fa-chalkboard-teacher',
      title: 'Mentor',
      exp: 'I\'ve been fortunate enough to be able to give back to the development community through mentoring junior developers. Seeing their success has been the most rewarding part of my career.'
    },
    {
      faIcon: 'fas fa-piggy-bank',
      title: 'Ambitious',
      exp: `I learned early on that while knowledge can get you far, hard work gets you further. In my role as a Senior Developer, I take a lead from the trenches approach and am never afraid to roll up my sleeves and get to work.`
    },
    {
      faIcon: 'fas fa-layer-group stack',
      title: 'Full Stac',
      exp: 'From Front-end to Back-end and everything in between, I like to be involved in the full development process. By looking at the big-picture, I can anticipate potential problems and continuously improve projects on the fly.'
    },
    {
      faIcon: 'fas fa-robot robot',
      title: 'Extracurriculars',
      exp: 'In addition to the core CS skill set and high-level development design that I utilize in my day-to-day,through personal projects I have become well versed in the facets of cutting-edge concepts such as machine-learning, cyber-security, and cloud computing.'
    }
  ]

  updateLanding(setLanding: boolean): void {
    this.onLanding = setLanding;
  }

  setLandingImage(): object {
    return { height: `${this.height}px`, width: `${this.width}px` };
  }

  ngOnInit(): void {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }
}
