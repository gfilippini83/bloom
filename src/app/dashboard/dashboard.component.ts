import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  fontfamily:string;
  size: string;
  textColor: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tiles : Tile[] = [];

  tilesDesktop : Tile[] = [
    {text: '', cols: 2, rows: 1, color: '', fontfamily:'', size: '20px', textColor: 'black'},
    {text: 'Esports Management. Lets Bloom!', cols: 2, rows: 1, color: '', fontfamily: 'VeganFont', size: '20px', textColor: 'black'},
    {text: '', cols: 2, rows: 1, color: '', fontfamily:'', size: '20px', textColor: 'black'},
    {text: 'Our Story', cols: 1, rows: 1, color: '',fontfamily:'', size: '25px', textColor: 'black'},
    {text: '', cols: 5, rows: 1, color: '', fontfamily:'', size: '20px', textColor: 'black'},
    {text: 'A team of the best and brightest talent in the Esports and streaming industry. Our objective is to build longstanding relationships with companies that align with each member of team Bloom for partnerships that make sense. The streaming industry can feel over saturated, which takes the fun out of gaming. We are here to change that and we value our members, partners, and viewers to make for the greatest online streaming experience.', cols: 6, rows: 1, color: '', fontfamily:'', size: '17px', textColor: '#8A8A8A'},
    {text: 'Your Support Team', cols: 1, rows: 1, color: '', fontfamily:'', size: '20px', textColor: 'black'},
    {text: '', cols: 2, rows: 1, color: '', fontfamily:'', size: '15px', textColor: 'black'},
    {text: 'Our Winning Philosophy', cols: 1, rows: 1, color: '', fontfamily:'', size: '19px', textColor: 'black'},
    {text: '', cols: 2, rows: 1, color: '', fontfamily:'', size: '10px', textColor: 'black'},
    {text: 'We make sh*t happen. The background which allows you to focus on gaming and being the best at your sport. We are driven to make your dreams become a reality. What is it that you want? ', cols: 3, rows: 1, color: '', fontfamily:'', size: '17px', textColor: '#8A8A8A'},
    {text: 'We are goal seekers. Here to build the best partnership experiences on a variety of platforms. ROIs are meant to be shattered in this industry and we are here to offer you the best return, in the shortest time. ', cols: 3, rows: 1, color: '', fontfamily:'', size: '17px', textColor: '#8A8A8A'},
  ];
  tilesMoile : Tile[] = [
    {text: 'Esports Management. Lets Bloom!', cols: 1, rows: 1, color: '', fontfamily: 'VeganFont', size: '15px', textColor: 'black'},
    {text: 'Our Story', cols: 1, rows: 1, color: '',fontfamily:'', size: '15x', textColor: 'black'},
    {text: 'A team of the best and brightest talent in the Esports and streaming industry. Our objective is to build longstanding relationships with companies that align with each member of team Bloom for partnerships that make sense. The streaming industry can feel over saturated, which takes the fun out of gaming. We are here to change that and we value our members, partners, and viewers to make for the greatest online streaming experience.', cols: 1, rows: 1, color: '', fontfamily:'', size: '12px', textColor: '#8A8A8A'},
    {text: 'Your Support Team', cols: 1, rows: 1, color: '', fontfamily:'', size: '15px', textColor: 'black'},
    {text: 'We make sh*t happen. The background which allows you to focus on gaming and being the best at your sport. We are driven to make your dreams become a reality. What is it that you want? ', cols: 1, rows: 1, color: '', fontfamily:'', size: '12px', textColor: '#8A8A8A'},
    {text: 'Our Winning Philosophy', cols: 1, rows: 1, color: '', fontfamily:'', size: '15px', textColor: 'black'},
    {text: 'We are goal seekers. Here to build the best partnership experiences on a variety of platforms. ROIs are meant to be shattered in this industry and we are here to offer you the best return, in the shortest time. ', cols: 1, rows: 1, color: '', fontfamily:'', size: '12px', textColor: '#8A8A8A'},
  ];

  tiles2 : Tile[] = [
    {text: 'Services You Receive at Bloom!', cols: 3, rows: 1, color: '#137CA9', fontfamily: 'VeganFont', size: '30px', textColor: 'white'},
    {text: '- Build your personal brand', cols: 1, rows: 1, color: '#137CA9', fontfamily:'', size: '20px', textColor: 'white'},
    {text: '- Seek endorsement opportunities', cols: 1, rows: 1, color: '#137CA9', fontfamily:'', size: '20px', textColor: 'white'},
    {text: '- Acquire sponsorships', cols: 1, rows: 1, color: '#137CA9', fontfamily:'', size: '20px', textColor: 'white'},
    {text: '- Create connections', cols: 1, rows: 1, color: '#137CA9', fontfamily:'', size: '20px', textColor: 'white'},
    {text: '- Add additional revenue streams', cols: 1, rows: 1, color: '#137CA9', fontfamily:'', size: '20px', textColor: 'white'},
    {text: '- Multiply your growth', cols: 1, rows: 1, color: '#137CA9', fontfamily:'', size: '20px', textColor: 'white'},
  ];
  breakpoint: number;
  breakpoint2: number;

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth <= 700) {
      this.breakpoint = 1
      this.breakpoint2 = 1
      this.tiles2[0].cols=1
      this.tiles= this.tilesMoile
      document.getElementById('videoContainer').style.height = "300px"
      document.getElementById('videoContainer2').style.height = "300px"
      document.getElementById('videoContainer3').style.height = "300px"
    } else {
      this.breakpoint2 = 3
      this.breakpoint = 6
      this.tiles2[0].cols=3
      this.tiles= this.tilesDesktop
      document.getElementById('videoContainer').style.height = "600px"
      document.getElementById('videoContainer2').style.height = "600px"
      document.getElementById('videoContainer3').style.height = "600px"
    }
}

onResize(event): void {
  // console.log(event.target.innerWidth)
  // this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  if(event.target.innerWidth <= 700) {
    this.breakpoint2 = 1
    this.breakpoint = 1
    this.tiles2[0].cols=1
    this.tiles= this.tilesMoile
    document.getElementById('videoContainer').style.height = "300px"
    document.getElementById('videoContainer2').style.height = "300px"
    document.getElementById('videoContainer3').style.height = "300px"

  } else {
    this.breakpoint2 = 3
    this.breakpoint = 6
    this.tiles2[0].cols=3
    this.tiles= this.tilesDesktop
    document.getElementById('videoContainer').style.height = "600px"
    document.getElementById('videoContainer2').style.height = "600px"
    document.getElementById('videoContainer3').style.height = "600px"
  }
}

}
