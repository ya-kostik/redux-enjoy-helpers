/**
 * return set reducer with auto-reset logic
 * @param  {Object}   initialState initial state for reducer
 * @return {Function}              set reducer
 */
export function getSetReducer(initialState) {
  return function set(state, action) {
    if (action.reset) {
      return { ...initialState, ...action.state }
    }
    return { ...state, ...action.state }
  }
}

/**
 * return reset reduser, for reset state
 * @param  {Object}   initialState initial state for reducer
 * @return {Function}              reset reducer
 */
export function getResetReducer(initialState) {
  return function reset() {
    return initialState;
  }
}

/**
 * Create reducer by types hash
 * ...
 * createReducer({
 *   '@@user/ADD_PHOTO': function(state, action) {
 *     return { ...state, photo: action.photo }
 *   },
 *   //...
 * }, initialUserState);
 * ...
 * createReducer({
 *   [TYPES.ADD_PHOTO](state, action) {
 *     return { ...state, photo: action.photo }
 *   },
 *   //...
 * }, initialUserState, null, { set: TYPES.SET });
 *
 * @param  {Object} switches            hash with type => reducer values
 * @param  {Mixed}  [initialState=null] initial state
 * @param  {Object} [extentions=null]   sub hash with field name => reducer values for inner fields reducing
 * @param  {Object} [options=null]      options, set: SET_TYPE, reset: RESET_TYPE for auto create SET and RESET reducers
 * @return {Function}                   reducer
 */
export function createReducer(switches, initialState = null, extentions = null, options = null) {
  if (options && options.set && initialState) {
    switches[options.set] = getSetReducer(initialState);
  }
  if (options && options.reset && initialState) {
    switches[options.reset] = getResetReducer(initialState);
  }
  return function(state = initialState, action) {
    let nextState = state;
    if (switches[action.type]) {
      //TODO: add isFunction check
      nextState = switches[action.type](state, action);
    }
    if (extentions) {
      let extState = {};
      Object.keys(extentions).forEach(function(key) {
        const ext = extentions[key];
        if (nextState[key] && ext) {
          //TODO: add isFunction check
          extState[key] = ext(nextState[key], action);
        }
      });
      nextState = {
        ...nextState,
        ...extState
      }
    }
    return nextState;
  }
}

export default createReducer;
