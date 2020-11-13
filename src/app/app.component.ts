import { Component } from '@angular/core';
import {
  WindowsType,
  Timeline,
  Squares,
  Social,
} from '../assets/typescript/type';
import { videos, people, documents } from '../assets/json/windows.json';
import {
  breadcrumbTop,
  breadcrumbBottom,
  breadcrumbTnc,
} from '../assets/json/breadcrumb.json';
import { timeline } from '../assets/json/timelines.json';
import { squares } from '../assets/json/squares.json';
import { social } from '../assets/json/social.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  videos: WindowsType = videos;
  people: WindowsType = people;
  documents: WindowsType = documents;
  timeline: Timeline[] = timeline;
  squares: Squares[] = squares;
  breadcrumbTop: string[] = breadcrumbTop;
  social: Social[] = social;
  breadcrumbBottom: string[] = breadcrumbBottom;
  breadcrumbTnc: string[] = breadcrumbTnc;
  title = 'angular-landing-page-slicing';
}
