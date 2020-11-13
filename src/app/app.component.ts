import { Component } from '@angular/core';
import { WindowsType, Timeline, Squares } from '../assets/typescript/type';
import { videos, people, documents } from '../assets/json/windows.json';
import { timeline } from '../assets/json/timelines.json';
import { squares } from '../assets/json/squares.json';
import { breadcrumbTop } from '../assets/json/breadcrumb.json';

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
  title = 'angular-landing-page-slicing';
}
