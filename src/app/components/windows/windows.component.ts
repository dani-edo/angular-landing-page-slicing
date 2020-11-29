import { Component, Input, OnInit } from '@angular/core';
import { WindowsType, Photos } from 'src/assets/typescript/type';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss'],
})
export class WindowsComponent implements OnInit {
  @Input() data?: WindowsType;
  @Input() photos: Photos[] = [];

  constructor() {}

  ngOnInit(): void {}
}
