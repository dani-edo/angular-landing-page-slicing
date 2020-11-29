import * as Action from './actions';
import { Photos } from 'src/assets/typescript/type';

export function reducer(
  state: Photos[] = [],
  action: Action.Actions
): Array<Photos> {
  switch (action.type) {
    case Action.ADD_DATA:
      return action.payload;
    default:
      return state;
  }
}
