import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { PhotosState, Photos } from 'src/assets/typescript/type';
import { Observable } from 'rxjs';

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
export class HomeComponent {
  videos: WindowsType = videos;
  people: WindowsType = people;
  documents: WindowsType = documents;
  timeline: Timeline[] = timeline;
  squares: Squares[] = squares;
  breadcrumbTop: string[] = breadcrumbTop;
  social: Social[] = social;
  breadcrumbBottom: string[] = breadcrumbBottom;
  breadcrumbTnc: string[] = breadcrumbTnc;
  photos: Photos[] = [];
  title = 'angular-landing-page-slicing';

  constructor(private store: Store<PhotosState>) {
    const data: Observable<Photos[]> = this.store.select('list');
    data.subscribe((e) => (this.photos = e));
  }
}
