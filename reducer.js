"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getSetReducer = getSetReducer;
exports.getResetReducer = getResetReducer;
exports.createReducer = createReducer;
/**
 * @module reducer
 */

/**
 * return set reducer with auto-reset logic
 * @param  {Object}   initialState initial state for reducer
 * @return {Function}              set reducer
 */
function getSetReducer(initialState) {
  return function set(state, action) {
    if (action.reset) {
      return _extends({}, initialState, action.state);
    }
    return _extends({}, state, action.state);
  };
}

/**
 * return reset reduser, for reset state
 * @param  {Object}   initialState initial state for reducer
 * @return {Function}              reset reducer
 */
function getResetReducer(initialState) {
  return function reset() {
    return initialState;
  };
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
function createReducer(switches) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var extentions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  if (options && options.set && initialState) {
    switches[options.set] = getSetReducer(initialState);
  }
  if (options && options.reset && initialState) {
    switches[options.reset] = getResetReducer(initialState);
  }
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var nextState = state;
    if (switches[action.type]) {
      //TODO: add isFunction check
      nextState = switches[action.type](state, action);
    }
    if (extentions) {
      var extState = {};
      Object.keys(extentions).forEach(function (key) {
        var ext = extentions[key];
        if (nextState[key] && ext) {
          //TODO: add isFunction check
          extState[key] = ext(nextState[key], action);
        }
      });
      nextState = _extends({}, nextState, extState);
    }
    return nextState;
  };
}

exports.default = createReducer;