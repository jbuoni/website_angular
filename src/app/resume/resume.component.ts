import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface IIcon {
  faClass: string;
  text: string;
}

interface ISkill {
  skill: string;
  stars: Array<number>;
}

interface IResumeRow {
  line1: string;
  line2: string;
  date: string;
  image: string;
  info?: Array<string>;
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements OnInit {

  icons: Array<IIcon> = [
    { faClass: 'fas fa-laptop laptop', text: 'buoni.github.io' },
    { faClass: 'fas fa-mobile-alt phone', text: '678-596-2815' },
    { faClass: 'fas fa-envelope-open-text', text: 'buoni.jason@gmail.com' },
    { faClass: 'fab fa-linkedin', text: 'linkedin.com/in/jason-buoni-33684451' },
    { faClass: 'fab fa-github-alt', text: 'https://github.com/jbuoni' },
    { faClass: 'fab fa-bitbucket', text: 'https://bitbucket.org/JasonBuoni25' }
  ];

  skills: Array<ISkill> = [
    { skill: 'JavaScript', stars: [1, 2, 3, 4, 5] },
    { skill: 'Python', stars: [1, 2, 3, 4] },
    { skill: 'NodeJS', stars: [1, 2, 3, 5] },
    { skill: 'TypeScript', stars: [1, 2, 3, 4] },
    { skill: 'Java', stars: [1, 2, 3] },
    { skill: 'C#', stars: [1, 2, 3] },
    { skill: 'Scala', stars: [1, 2, 3] },
    { skill: 'React', stars: [1, 2, 3, 4] },
    { skill: 'SQL', stars: [1, 2, 3] },
    { skill: 'PostgreSQL', stars: [1, 2, 3] },
    { skill: 'MongoDB', stars: [1, 2] },
    { skill: 'Docker', stars: [1, 2] },
    { skill: 'Kubernetes', stars: [1, 2] },
    { skill: 'Ruby', stars: [1, 2] },
    { skill: 'Elasticsearch', stars: [1, 2] },
    { skill: 'AWS', stars: [1] },
    { skill: 'Backbone', stars: [1] },
    { skill: 'Angular', stars: [1] },
    { skill: 'C++', stars: [1] },
    { skill: 'jQuery', stars: [1, 2, 3, 4] }
  ];

  softSkills: Array<ISkill> = [
    { skill: 'Mentorship', stars: [1, 2, 3, 4, 5]},
    { skill: 'Leadership', stars: [1, 2, 3]},
    { skill: 'Collaboration', stars: [1, 2, 3, 4]},
    { skill: 'Communication', stars: [1, 2, 3]},
  ];

  education: Array<IResumeRow> = [
    {
      line1: 'Georgia Institute of Technology',
      line2: 'Masters of Science, Computer Science, 3.8 GPA',
      date: 'August 2018',
      image: '../../assets/images/gtech.png'
    },
    {
      line1: 'Rochester Institute of Technology',
      line2: 'Bachelors of Science, Software Engineering, Economics Minor',
      date: 'May 2013',
      image: '../../assets/images/rit.png'
    }
  ];

  jobs: Array<IResumeRow> = [
    {
      line1: 'Honeywell, Atlanta GA', line2: 'Senior Software Engineer', date: 'September 2019 - Present',
      info: [
        'Using TypeScript, I develop and maintain Honeywell Forge Platform APIs and CLI tools used to produce IoT applications.',
        'Assist in DevOps related tasks using Docker, Kubernetes, Openshift, as well as other deployment tools.'
      ],
      image: '../../assets/images/honeywell.jpeg'
    },
    {
      line1: 'Turner Broadcasting Inc., Atlanta GA', line2: 'Senior Software Developer', date: 'May 2015 - September 2019',
      info: [
        // tslint:disable-next-line: max-line-length
        'Developed backend and frontend services used to transfer video files and metadata to CNN and Turner internal systems around the world.',
        'Worked as a member of a scrum team for multiple high visibility projects including the Elections System and Content Supply Chain.',
        'Worked with mulitple languages and frameworks throughout the day such as NodeJS, React, Scala, Java, Python, and MongoDB.',
        'Assisted in DevOps related tasks using Chef, AWS, and Jenkins.',
        // tslint:disable-next-line: max-line-length
        'Created a new tracking system as a side project using Scala and Akka. Project was deployed internally and replaced multiple legacy systems.',
        'Spearheaded mentorship program for my department, which was incorporated to all intern positions for the GTO Tech Intern program.'
      ],
      image: '../../assets/images/warnerresume.jpeg'
    },
    {
      line1: 'Westat, Atlanta GA​', line2: 'Programmer Analyst', date: 'June 2013 - May 2015',
      info: [
        'Developed backend and front end services used to monitor and analyze large amounts of data.',
        // tslint:disable-next-line: max-line-length
        'Worked; with multiple languages; and; databases; including; C;#, Java, Android, JavaScript, JQuery, SQL, PostgreSQL, MySQL, and; SQLite.'
      ],
      image: '../../assets/images/westat.png'
    },
    {
      line1: 'Mary Cariola Children’s Center, Rochester New York',
      line2: 'Website Developer', date: 'December 2012 – May 2013',
      image: '../../assets/images/mary.png'
    },
    {
      line1: 'Verivo Software, Waltham Massachusetts',
      line2: 'Product Manager', date: 'February 2011 – September 2011',
      image: '../../assets/images/verivo.png'
    },
    {
      line1: 'Brand Networks Inc., Rochester NY​',
      line2: 'Software Developer', date: 'March 2012 – November 2012',
      image: '../../assets/images/bn.png'
    }
  ];

  constructor() { }

  viewPdf = () => window.open('../../assets/files/resume.pdf', '_blank');

  ngOnInit(): void { }

}

