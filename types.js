"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function create(prefix, types) {
  var TYPES = {};
  types.forEach(function (type) {
    TYPES[type] = prefix + type;
  });
  return TYPES;
}

exports.default = create;