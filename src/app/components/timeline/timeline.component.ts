import { Component, Input, OnInit } from '@angular/core';
import { Timeline, Photos } from 'src/assets/typescript/type';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input() timeline?: Timeline[];
  @Input() photos: Photos[] = [];
  @Input() id = '';
  constructor() {}

  ngOnInit(): void {}
}
