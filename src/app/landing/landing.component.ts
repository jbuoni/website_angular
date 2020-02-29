import { Component, OnInit } from '@angular/core';
import LandingSingleton from '../common/landingSingleton';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less', './animate.less']
})
export class LandingComponent implements OnInit {

  constructor() { }

  height: number;
  width: number;

  setLandingImage(): object {
    return { height: `${this.height}px`, width: `${this.width}px` };
  }

  ngOnInit(): void {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  ngOnDestroy(): void {
    const landingSingleton: LandingSingleton = LandingSingleton.getInstance();
    landingSingleton.isLanding = false;
  }
}
