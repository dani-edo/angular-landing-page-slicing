import * as Action from './actions';

export function reducer(
  state: string[] = [],
  action: Action.Actions
): Array<string> {
  switch (action.type) {
    case Action.ADD_DATA:
      return action.payload;
    default:
      return state;
  }
}
