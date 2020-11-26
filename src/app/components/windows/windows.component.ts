import { Component, Input, OnInit } from '@angular/core';
import { WindowsType } from 'src/assets/typescript/type';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss'],
})
export class WindowsComponent implements OnInit {
  @Input() data?: WindowsType;
  @Input() photos: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
