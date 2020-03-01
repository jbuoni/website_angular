export interface IMentee {
  name: string;
  pic: string;
  website: string;
  title: string;
  company: string;
  companyWebsite: string;
  companyPic: string;
  school: string;
  schoolPic: string;
  faIcon: string;
}

export const mentees: Array<IMentee> = [
  {
    name: 'Sanford Leach',
    faIcon: 'fab fa-linkedin',
    pic: '../../assets/images/sandman.jpeg',
    title: 'Systems/Software Developer',
    website: 'https://www.linkedin.com/in/sanford-leach/',
    company: 'Warner Media',
    companyPic: '../../assets/images/warnermedia.jpeg',
    companyWebsite: 'https://www.warnermediagroup.com/',
    school: 'University of Georgia',
    schoolPic: '../../assets/images/uga.png'
  },
  {
      name: 'Soha Jiwani',
      faIcon: 'fab fa-linkedin',
      pic: '../../assets/images/soha.jpeg',
      title: 'Software Developer',
      website: 'https://www.linkedin.com/in/soha-jiwani/',
      company: 'Slack',
      companyPic: '../../assets/images/slack.png',
      companyWebsite: 'https://slack.com/',
      school: 'Georgia Institute of Technology',
      schoolPic: '../../assets/images/tech.png',
  },

  {
      name: 'Vinny Kapil',
      pic: '../../assets/images/vinny.jpeg',
      title: 'Systems/Software Developer',
      website: 'https://vinnykapil.github.io',
      company: 'Warner Media',
      faIcon: 'fas fa-laptop laptop',
      companyPic: '../../assets/images/warnermedia.jpeg',
      companyWebsite: 'https://www.warnermediagroup.com/',
      school: 'Georgia Institute of Technology',
      schoolPic: '../../assets/images/tech.png',
  },
  {
      name: 'Bojun Yang',
      faIcon: 'fab fa-linkedin',
      pic: '../../assets/images/bo.jpeg',
      title: 'Software Engineer',
      website: 'https://www.linkedin.com/in/bojun-yang-a181a5129/',
      company: 'Amazon',
      companyPic: '../../assets/images/amazon.png',
      companyWebsite: 'https://www.amazon.com/',
      school: 'Georgia Institute of Technology',
      schoolPic: '../../assets/images/tech.png',
  },

  {
      name: 'Paul Dorsch',
      pic: '../../assets/images/paul.jpeg',
      title: 'Software Developer',
      faIcon: 'fas fa-laptop laptop',
      website: 'https://pauldorsch.com/',
      company: 'Mastercard',
      companyPic: '../../assets/images/mastercard.png',
      companyWebsite: 'https://www.mastercard.us/en-us.html',
      school: 'Georgia Institute of Technology',
      schoolPic: '../../assets/images/tech.png',
  },
  {
      name: 'Laura Roesler',
      pic: '../../assets/images/laura.jpeg',
      title: 'Software Engineer',
      faIcon: 'fas fa-laptop laptop',
      website: 'https://lroseler.github.io/',
      company: 'Park Mobile',
      companyPic: '../../assets/images/parkmobile.png',
      companyWebsite: 'https://parkmobile.io/',
      school: 'Georgia State University',
      schoolPic: '../../assets/images/state.png'
  }
]
