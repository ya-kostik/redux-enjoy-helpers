"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.remove = remove;
exports.change = change;
exports.move = move;
exports.swap = swap;
exports.resplaceItemsAtIndex = resplaceItemsAtIndex;
exports.addToIndex = addToIndex;
exports.addItemsToIndex = addItemsToIndex;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Add item into array
 * @param  {Array} list array to change
 * @param  {Midex} item item to add
 * @return {Array}      new array with new item inside
 */
function add(list, item) {
  return [].concat(_toConsumableArray(list), [item]);
}

/**
 * Remove item from array
 * @param  {Array}  list  array to change
 * @param  {Number} index index in array
 * @return {Array}        new array without item at index inside
 */
function remove(list, index) {
  return [].concat(_toConsumableArray(list.slice(0, index)), _toConsumableArray(list.slice(index + 1)));
}

/**
 * Replace item at index
 * @param  {Array}  list  array to change
 * @param  {Number} index index in array
 * @param  {Mixed}  item  new item
 * @return {Array}        new array with new item at index
 */
function change(list, index, item) {
  return [].concat(_toConsumableArray(list.slice(0, index)), [item], _toConsumableArray(list.slice(index + 1)));
}

/**
 * move item from index to new index
 * @param  {Array}  list  array to change
 * @param  {Number} from index in array
 * @param  {Number} to   index in array
 * @return {Array}       new array with moved item
 */
function move(list, from, to) {
  var temp = remove(list, from);
  return addToIndex(temp, to, list[from]);
}

/**
 * swap items in array
 * @param  {Array}  list   array to change
 * @param  {Number} index1 index in array
 * @param  {Number} index2 index in array
 * @return {Array}         new array with swapped items
 */
function swap(list, index1, index2) {
  var temp = change(list, index1, list[index2]);
  return change(temp, index2, list[index1]);
}

/**
 * inject items into index with removing item at index
 * @param  {Array}  list  array to change
 * @param  {Number} index index in array
 * @param  {Array}  items items to inject
 * @return {Array}        new array with injected items
 */
function resplaceItemsAtIndex(list, index, items) {
  return [].concat(_toConsumableArray(list.slice(0, index)), _toConsumableArray(items), _toConsumableArray(list.slice(index + 1)));
}

/**
 * inject item into index without removing item at index
 * @param  {Array}  list  array to change
 * @param  {Number} index index in array
 * @param  {Mixed}  item  item to inject
 * @return {Array}        new array with injected items
 */
function addToIndex(list, index, item) {
  return [].concat(_toConsumableArray(list.slice(0, index)), [item], _toConsumableArray(list.slice(index)));
}

/**
 * inject items into index without removing item at index
 * @param  {Array}  list  array to change
 * @param  {Number} index index in array
 * @param  {Array}  items items to inject
 * @return {Array}        new array with injected items
 */
function addItemsToIndex(list, index, items) {
  return [].concat(_toConsumableArray(list.slice(0, index)), _toConsumableArray(items), _toConsumableArray(list.slice(index)));
}