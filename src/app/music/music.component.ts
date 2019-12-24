import { Component, OnInit } from '@angular/core';
import { Imusic } from '../shared/imusic';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
music:Imusic[];
  constructor() {
this.music=[
  {
  singer:'siya',
  songName:'cheap Thrills',
  city:'am',
  picture:'../assets/sia.jpg',
  song:'../assets/cheap.mp3',
  showImage:true,
  
},
{
 singer:'shreya',
 songName:'tum bin',
 city:'nas',
 picture:'../assets/shreya.jpg',
 song:'../assets/cheap.mp3',
 showImage:true,
},
{
 singer:'shankar',
 songName:'Breathless',
 city:'nag',
 picture:'../assets/shankar.jpg',
 song:'../assets/cheap.mp3',
 showImage:true,
}];

   }

  ngOnInit() {
  }

}
