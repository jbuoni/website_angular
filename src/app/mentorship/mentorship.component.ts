import { Component, OnInit } from '@angular/core';
import { IMentee, mentees } from './mentees';


@Component({
  selector: 'app-mentorship',
  templateUrl: './mentorship.component.html',
  styleUrls: ['./mentorship.component.less']
})
export class MentorshipComponent implements OnInit {

  myMentees: Array<IMentee> = mentees;

  constructor() { }

  ngOnInit(): void {}

}
