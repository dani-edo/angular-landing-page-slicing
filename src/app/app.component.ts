import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  WindowsType,
  Timeline,
  Squares,
  Social,
} from '../assets/typescript/type';
import { videos, people, documents } from '../assets/data/windows';
import {
  breadcrumbTop,
  breadcrumbBottom,
  breadcrumbTnc,
} from '../assets/data/breadcrumb';
import { timeline } from '../assets/data/timelines';
import { squares } from '../assets/data/squares';
import { social } from '../assets/data/social';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  videos: WindowsType = videos;
  people: WindowsType = people;
  documents: WindowsType = documents;
  timeline: Timeline[] = timeline;
  squares: Squares[] = squares;
  breadcrumbTop: string[] = breadcrumbTop;
  social: Social[] = social;
  breadcrumbBottom: string[] = breadcrumbBottom;
  breadcrumbTnc: string[] = breadcrumbTnc;
  photos: string[] = [];
  title = 'angular-landing-page-slicing';

  readonly CLIENT_ID =
    '78e47bffdee0c00cca66e1e3768f02f829fbf1bb16b3a4ddd5b7502953249963';
  readonly BASE_URL = `https://api.unsplash.com`;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.http
      .get(
        `${this.BASE_URL}/photos/random/?count=30&client_id=${this.CLIENT_ID}`
      )
      .subscribe((data) => {
        const input: string[] = [];
        Object.entries(data).forEach((e) => {
          input.push(e[1].urls.small);
        });
        this.photos = input;
      });
  }
}
