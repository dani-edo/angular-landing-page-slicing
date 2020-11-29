import { Component, Input, OnInit } from '@angular/core';
import { Squares, Photos } from 'src/assets/typescript/type';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.scss'],
})
export class SquaresComponent implements OnInit {
  @Input() squares?: Squares[];
  @Input() photos: Photos[] = [];
  constructor() {}

  ngOnInit(): void {}
}
