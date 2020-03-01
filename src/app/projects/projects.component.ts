import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  onClick = (link: string): void => {
    const win = window.open(link, '_blank');
    win.focus();
  }

  ngOnInit(): void {
  }

}
