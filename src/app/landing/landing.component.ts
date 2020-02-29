import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
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
}
