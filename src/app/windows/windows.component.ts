import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss'],
})
export class WindowsComponent implements OnInit {
  @Input() title = '';
  @Input() all = '';

  constructor() {}

  ngOnInit(): void {}
}
