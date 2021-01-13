import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-ads',
  templateUrl: './banner-ads.component.html',
  styleUrls: ['./banner-ads.component.scss'],
})
export class BannerAdsComponent {
  @Input() adClient = 'ca-pub-7464976184889071';
  @Input() adSlot = 1784384024;
  @Input() display = 'block';
  @Input() width = 284;
  @Input() height = 136;
  @Input() type = 'normal'; // normal / fixed-bottom / popup
  @Input() closeButton = false;
  @Input() centered = false;
  @Input() squared = false;
  @Input() adFormat = 'auto';

  show = true;
  constructor() {}

  close(): void {
    this.show = false;
  }
}
