import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as Action from 'src/app/store/actions';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class Effects {
  readonly CLIENT_ID =
    '78e47bffdee0c00cca66e1e3768f02f829fbf1bb16b3a4ddd5b7502953249963';
  readonly BASE_URL = `https://api.unsplash.com`;

  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  loadData$ = this.actions$.pipe(
    ofType(Action.GET_DATA),
    switchMap((): any => {
      return this.http
        .get(
          `${this.BASE_URL}/photos/random/?count=30&client_id=${this.CLIENT_ID}`
        )
        .pipe(
          map((data) => {
            const photos: string[] = [];
            Object.entries(data).forEach((e) => {
              photos.push(e[1].urls.small);
            });
            return new Action.AddData(photos);
          }),
          catchError((err) => of(console.log('err', err)))
        );
    })
  );
}

export const effects: any[] = [Effects];
