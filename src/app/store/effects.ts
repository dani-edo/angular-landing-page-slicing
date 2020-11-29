import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as Action from 'src/app/store/actions';
import { HttpClient } from '@angular/common/http';
import { Photos } from 'src/assets/typescript/type';
import { of } from 'rxjs';
import { UNSPLASH_ID, UNSPLASH_URL } from 'src/environments/environment';

@Injectable()
export class Effects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  loadData$ = this.actions$.pipe(
    ofType(Action.GET_DATA),
    switchMap((): any => {
      return this.http
        .get(`${UNSPLASH_URL}/photos/random/?count=30&client_id=${UNSPLASH_ID}`)
        .pipe(
          map((data) => {
            const photos: Photos[] = [];
            Object.entries(data).forEach((e) => {
              photos.push({ id: e[1].id, url: e[1].urls.small });
            });
            return new Action.AddData(photos);
          }),
          catchError((err) => of(console.log('err', err)))
        );
    })
  );
}

export const effects: any[] = [Effects];
