# redux-enjoy-helpers
Helpers for ejoying Redux

## Install
```sh
npm i --save-dev redux-enjoy-helpers
```

## Use
### Types
```javascript
import { createTypes } from 'redux-enjoy-helpers/type';
const PREFIX = '@@user/current/';
export const TYPES = createTypes(PREFIX, [
  'SET', 'RESET', 'SAVE', 'TOOGLE_INVISIBLE'
]);
export const actions = {
  set(state, reset = false) {
    return { type: TYPES.SET, state, reset }
  },
  reset() {
    return { type: TYPES.RESET }
  },
  save() {
    return { type: TYPES.SAVE }
  },
  toogleInvisible() {
    return { type: TYPES.TOOGLE_INVISIBLE }
  }
}
```

### Reducers
```javascript
import { createReducer } from 'redux-enjoy-helpers/reducer';
import { TYPES } from '../actions/user/current';

const initialState = {
  firstName: '',
  lastName: '',
  login: '',
  invisible: false
}

export default createReducer({
  [TYPES.TOOGLE_INVISIBLE](state, action) {
    return {
      ...state,
      invisible: !state.invisible
    }
  }
}, initialState, null, { set: TYPES.SET, reset: TYPES.RESET });
// set automatic add set-reducer
// ...
// (state, action) => {
//   if (action.reset) {
//      return { ...initialState, ...action.state }
//    }
//    return { ...state, ...action.state }
// }
// reset — add reset reducer, (state, action) => initialState
```
in action:
```javascript
import {actions as userActions} from 'actions/user';
// ...
dispatch(userActions.set({ firstName: 'Kostya' }));
//set firstName at user.current to Kostya
dispatch(userActions.toogleInvisible()));
//toogle invisible flag at user.current
```

More docs at [docs page](https://ya-kostik.github.io/redux-enjoy-helpers/)

MIT License
