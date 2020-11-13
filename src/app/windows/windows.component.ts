import { Component, Input, OnInit } from '@angular/core';
import { WindowsType } from '../../assets/typescript/type';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss'],
})
export class WindowsComponent implements OnInit {
  @Input() data?: WindowsType;

  constructor() {}

  ngOnInit(): void {}
}
