import { Component } from '@angular/core';

interface IIcon {
  faIcon: string;
  title: string;
  exp: string;
}

interface IExperience {
  language: string;
  years: number;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent {

  aboutIcons: Array<IIcon> = [
    {
      faIcon: 'fas fa-chalkboard-teacher',
      title: 'Mentor',
      // tslint:disable-next-line: max-line-length
      exp: 'I\'ve been fortunate enough to be able to give back to the development community through mentoring junior developers. Seeing their success has been the most rewarding part of my career.'
    },
    {
      faIcon: 'fas fa-piggy-bank',
      title: 'Ambitious',
      // tslint:disable-next-line: max-line-length
      exp: `I learned early on that while knowledge can get you far, hard work gets you further. In my role as a Senior Developer, I take a lead from the trenches approach and am never afraid to roll up my sleeves and get to work.`
    },
    {
      faIcon: 'fas fa-layer-group stack',
      title: 'Full Stack',
      // tslint:disable-next-line: max-line-length
      exp: 'From Front-end to Back-end and everything in between, I like to be involved in the full development process. By looking at the big-picture, I can anticipate potential problems and continuously improve projects on the fly.'
    },
    {
      faIcon: 'fas fa-robot robot',
      title: 'Extracurriculars',
      // tslint:disable-next-line: max-line-length
      exp: 'In addition to the core CS skill set and high-level development design that I utilize in my day-to-day,through personal projects I have become well versed in the facets of cutting-edge concepts such as machine-learning, cyber-security, and cloud computing.'
    }
  ];

  experience: Array<IExperience> = [
    { language: 'JavaScript', years: 90 },
    { language: 'Java', years: 60 },
    { language: 'Python', years: 70 },
    { language: 'NodeJS', years: 70 },
    { language: 'TypeScript', years: 70 },
    { language: 'React', years: 40 },
    { language: 'Angular', years: 20 },
    { language: 'C#', years: 40 },
    { language: 'Scala', years: 50 },
    { language: 'Mongo', years: 40 },
    { language: 'Docker', years: 20 },
    { language: 'SQL', years: 50 },
    { language: 'Postgres', years: 30 },
    { language: 'JQuery', years: 70 },
    { language: 'CSS', years: 40 },
    { language: 'Ruby', years: 20 },
    { language: 'Kubernetes', years: 10 }
  ];

  onBitbucketClick = (event): void => {
    const win = window.open('https://bitbucket.org/JasonBuoni25/', '_blank');
    win.focus();
    event.preventDefault();
  }

  onFacebookClick = (event): void => {
    const win = window.open('https://www.facebook.com/jason.buoni', '_blank');
    win.focus();
    event.preventDefault();
  }

  onLinkedInClick = (event): void => {
    const win = window.open('https://www.linkedin.com/in/jason-buoni-33684451/', '_blank');
    win.focus();
    event.preventDefault();
  }

  onGithubClick = (event): void => {
    const win = window.open('https://github.com/jbuoni', '_blank');
    win.focus();
    event.preventDefault();
  }

  onStackOverflowClick = (event): void => {
    const win = window.open('https://stackoverflow.com/users/650489/stanley-cup-phil', '_blank');
    win.focus();
    event.preventDefault();
  }
  clickFarm = (event): void => {
    const win = window.open('http://lachenbockfarm.com/', '_blank');
    win.focus();
    event.preventDefault();
  }

  getStyle = (years: number) => {
    return { width: `${years}%` };
  }
}


