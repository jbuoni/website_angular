import { Component } from '@angular/core';
import LandingSingleton from './common/landingSingleton';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  landingSingleton: LandingSingleton;
  landing: boolean;
  currentTab: string;

  constructor() {
    this.landingSingleton = LandingSingleton.getInstance();
  }

  setLanding(setLanding: boolean): void {
    this.landingSingleton.isLanding = setLanding;
  }

  onEmailButtonClick(): void {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=buoni.jason@gmail.com', 'Mailer');
  }

  ngOnInit(): void {
    const url: string = window.location.href;
    this.currentTab = url.split('/').pop();
    this.landing = this.landingSingleton.isLanding;
  }
}
