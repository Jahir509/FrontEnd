import { Component } from '@angular/core';
import { TweenMax, TimelineMax } from 'gsap';
import * as ScrollMagic from 'ScrollMagic';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apple';
  videoSource = 'assets/Apple-Dev-Ed-Pro.mp4';
}
