'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTypes = createTypes;
exports.createCollectionTypes = createCollectionTypes;
/**
 * @module type
 */

/**
 * Create types object for redux with prefix
 * createTypes('@@user/', ['SET', 'RESET']) => { SET: '@@user/SET', RESET: '@@user/RESET' };
 * @param  {String} prefix prefix
 * @param  {Array}  types  array of types
 * @return {Object}        hash with types
 */
function createTypes(prefix, types) {
  var TYPES = {};
  types.forEach(function (type) {
    TYPES[type] = prefix + type;
  });
  return TYPES;
}

/**
 * Сreate types object for redux collections
 * Use createTypes
 * @param  {String} prefix prefix
 * @param  {Array}  types  array of types
 * @return {Object}        hash with types
 */
function createCollectionTypes(prefix) {
  var types = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!Array.isArray(types)) types = [];
  types = types.concat(['PUSH', 'POP', 'SHIFT', 'UNSHIFT', 'SET', 'SETUP', 'REMOVE']);
  return createTypes(prefix, types);
}