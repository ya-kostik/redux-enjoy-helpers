"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTypes = createTypes;
/**
 * Create types object for redux with prefix
 * create('@@user/', ['SET', 'RESET']) => { SET: '@@user/SET', RESET: '@@user/RESET' };
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