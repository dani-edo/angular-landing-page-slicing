import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {
  WindowsType,
  Timeline,
  Squares,
  Social,
} from 'src/assets/typescript/type';
import { videos, people, documents } from 'src/assets/data/windows';
import {
  breadcrumbTop,
  breadcrumbBottom,
  breadcrumbTnc,
} from 'src/assets/data/breadcrumb';
import { timeline } from 'src/assets/data/timelines';
import { squares } from 'src/assets/data/squares';
import { social } from 'src/assets/data/social';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
