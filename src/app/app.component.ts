import { Component } from '@angular/core';
import { WindowsType } from '../assets/typescript/type';
import { videos, people, documents } from '../assets/json/windows.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  videos: WindowsType = videos;
  people: WindowsType = people;
  documents: WindowsType = documents;
  title = 'angular-landing-page-slicing';
}
