import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit {
  @Input() img = '';
  @Input() title: string | null = null;
  @Input() person = '';
  @Input() views = 0;
  constructor() {}

  ngOnInit(): void {}
}
