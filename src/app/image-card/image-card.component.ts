import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit {
  @Input() img: string | null = null;
  @Input() title: string | null = null;
  @Input() person: string | null = null;
  @Input() views: number | null = null;
  @Input() upload = false;
  constructor() {}

  ngOnInit(): void {}
}
