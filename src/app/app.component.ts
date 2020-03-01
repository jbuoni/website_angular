import { Component, HostListener, OnInit } from '@angular/core';
import LandingSingleton from './common/landingSingleton';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  landingSingleton: LandingSingleton;
  landing: boolean;
  currentTab: string;

  @HostListener('window:popstate', ['$event'])
  onPopState(): void {
    const url: string = window.location.href;
    this.currentTab = url.split('/').pop();
    this.landingSingleton.isLanding = this.currentTab === 'landing' || this.currentTab === 'resume'  || this.currentTab === '';
    this.landing = this.landingSingleton.isLanding;
  }

  constructor() {
    this.landingSingleton = LandingSingleton.getInstance();
  }

  setLanding(setLanding: boolean): void {
    this.landingSingleton.isLanding = setLanding;
    this.landing = setLanding;
  }

  onEmailButtonClick(event): void {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=buoni.jason@gmail.com', 'Mailer');
    event.preventDefault();
  }

  ngOnInit(): void {
    console.log('hi')
    const url: string = window.location.href;
    this.currentTab = url.split('/').pop();
    this.landing = this.landingSingleton.isLanding;
  }
}
