import { Component, OnInit, Input } from '@angular/core';
import { UploadType } from 'src/assets/typescript/type';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit {
  @Input() img?: string;
  @Input() title?: string;
  @Input() person?: string;
  @Input() views?: number;
  @Input() upload?: UploadType;
  @Input() id = '';
  constructor() {}

  ngOnInit(): void {}
}
