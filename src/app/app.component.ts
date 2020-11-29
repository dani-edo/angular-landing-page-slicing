import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PhotosState, Photos } from 'src/assets/typescript/type';
import { Observable } from 'rxjs';
import * as Actions from 'src/app/store/actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-landing-page-slicing';
  checkPhotos: Photos[] = [];

  constructor(private store: Store<PhotosState>) {
    const data: Observable<Photos[]> = this.store.select('list');
    data.subscribe((e) => (this.checkPhotos = e));
  }

  ngOnInit(): void {
    if (this.checkPhotos.length === 0) {
      this.store.dispatch(new Actions.GetData());
    }
  }
}
