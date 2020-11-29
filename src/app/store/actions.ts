import { Action } from '@ngrx/store';
import { Photos } from 'src/assets/typescript/type';

export const GET_DATA = '[UNSPLASH] Get';
export const ADD_DATA = '[LOCAL] Add';

export class GetData implements Action {
  readonly type = GET_DATA;
  constructor() {}
}

export class AddData implements Action {
  readonly type = ADD_DATA;
  constructor(public payload: Photos[]) {}
}

export type Actions = AddData | GetData;
