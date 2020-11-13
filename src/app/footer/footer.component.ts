import { Component, Input, OnInit } from '@angular/core';
import { Social } from '../../assets/typescript/type';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() social?: Social[];
  @Input() breadcrumbBottom: string[] = [];
  @Input() breadcrumbTnc: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
